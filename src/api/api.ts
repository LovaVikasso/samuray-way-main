import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {'API-KEY': 'c439f5a5-bddd-4704-8efe-2b5d6564f02a'}
})
export const API = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data)
    },
    getAuthMe () {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    setUserProfile (userId: string | number) {
        return instance.get(`/profile/${userId}`)
            .then(response => response.data)
    },
    getStatus (userId: string | number | null) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`,{status: status})
            .then(response => response.data)
    }

}

// type StatusResponseType = { status: string | null }