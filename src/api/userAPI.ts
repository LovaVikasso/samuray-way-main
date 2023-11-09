import { instance } from "./instance";

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
    async uploadPhoto(photo: File) {
        try {
            const formData = new FormData();
            formData.append('image', photo);

            const response = await instance.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form/data'
                }
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }

}