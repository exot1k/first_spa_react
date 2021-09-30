import axios from "axios";
import {photosType, profileType, usersDataType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "d2163079-b42e-4603-82b4-b99049bd814c"
    }
});

export enum ResultCodes {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type getItemsType<T> = {
    items: Array<T>
    totalCount: number
    error: string | null
}
export type responseType<D = {}, RC = ResultCodes> = {
    data: D
    resultCode: RC
    messages: Array<string>
}

type  getAuthResponseDataType = {
    id: number
    email: string
    login: string

}
type  loginResponseDataType = {
    userId: number
}
type savePhotoResponseDataType = {
    photos: photosType
}
type getCaptchaUrlResponseType = {
    url:string
}


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 7, term: string = '', friend: null | boolean = null) {
        return instance.get<getItemsType<usersDataType>>(`users?page=${currentPage}&count=${pageSize}&term=${term}`
            + (friend === null ? '' : `&friend=${friend}`),
        ).then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<responseType>(`follow/${userId}`).then(res => res.data)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<responseType>
    },
    getAuth() {
        return instance.get<responseType<getAuthResponseDataType>>(`/auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<responseType<loginResponseDataType>>(`/auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => response.data)
    },
    logout() {
        return instance.delete(`/auth/login`).then(response => response.data)
    },
    getUserProfile(userId: number | null) {
        return instance.get<profileType>(`/profile/${userId}`).then(res => res.data)
    },
    getUserStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`).then(res => res.data)
    },
    getCaptchaUrl() {
        return instance.get<getCaptchaUrlResponseType>(`/security/get-captcha-url`).then(res => res.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<responseType<savePhotoResponseDataType>>(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveProfile(profile: profileType) {
        return instance.put<responseType>(`/profile`, profile).then(res => res.data)
    },
    updateUserStatus(status: string) {
        return instance.put<responseType>(`/profile/status`, {status}).then(res => res.data)
    }
}
