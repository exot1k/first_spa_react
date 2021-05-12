import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "d2163079-b42e-4603-82b4-b99049bd814c"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 7) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getAuth(){
    return instance.get(`/auth/me`).then(response => response.data)
    },
    login(email,password, rememberMe = false, captcha){
        return instance.post(`/auth/login`,{email,password, rememberMe,captcha}).then(response => response.data)
    },
    logout(email,password, rememberMe = false){
        return instance.delete(`/auth/login`).then(response => response.data)
    },
    getUserProfile(userId) {
        return instance.get(`/profile/${userId}`)
    },
    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    getCaptchaUrl() {
        return instance.get(`/security/get-captcha-url`)
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`/profile`,profile)
    },
    updateUserStatus(status) {
        return instance.put(`/profile/status`,{status})
    }
}
