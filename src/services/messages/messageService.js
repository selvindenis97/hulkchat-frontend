import apiService from '../apiService';

export default {

    async getUserMessages(receiverId) {
        try {
            const responseData = await apiService.postData(`/message/user`, { receiverId: receiverId });
            return responseData;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    },
    async getChannelMessages(receiverId) {
        try {
            const responseData = await apiService.postData(`/message/channel`, { receiverId: receiverId });
            return responseData;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    },
    async sendMessage(receiverId, content) {
        try {
            const responseData = await apiService.postData(`/message/send`, { receiverId: receiverId, content: content });
            return responseData;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    },

};