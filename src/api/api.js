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
    getUserProfile(userId) {
        return instance.get(`/profile/${userId}`)
    }
}
