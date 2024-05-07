import apiService from '../apiService';

export default {

    async getChannels() {
        try {
            const responseData = await apiService.fetchData(`/channel/mine`);
            return responseData;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    },

};