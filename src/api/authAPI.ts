import { instance } from "./instance";

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
