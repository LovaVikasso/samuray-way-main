import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {'API-KEY': 'c439f5a5-bddd-4704-8efe-2b5d6564f02a'}
})
export const userAPI = {
    async getUsers(currentPage: number, pageSize: number) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async unfollowUser(userId: number) {
        const response = await instance.delete(`follow/${userId}`);
        return response.data;
    },
    async followUser(userId: number) {
        const response = await instance.post(`follow/${userId}`, {});
        return response.data;
    },

    async setUserProfile(userId: string | number) {
        const response = await instance.get(`/profile/${userId}`);
        return response.data;
    },
    async getStatus(userId: string | number | null) {
        const response = await instance.get<string>(`profile/status/${userId}`);
        return response.data;
    },
    async updateStatus(status: string) {
        const response = await instance.put(`profile/status/`, {status: status});
        return response.data;
    },

}

export const authAPI = {
    async login(email: string, password: string, rememberMe: boolean = false) {
        const response = await instance.post(`auth/login/`, {email, password, rememberMe});
        return response.data;
    },
    async logout() {
        const response = await instance.delete(`auth/login`);
        return response.data;
    },
    async getAuthMe() {
        const response = await instance.get(`auth/me`);
        return response.data;
    },
}

// type StatusResponseType = { status: string | null }