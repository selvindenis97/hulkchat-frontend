import apiService from '../apiService';

export default {

    async getUsers() {
        try {
            const responseData = await apiService.fetchData(`/user`);
            return responseData;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    },

};