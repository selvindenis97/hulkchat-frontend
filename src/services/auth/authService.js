import apiService from '../apiService';

export default {

    async login(loginData) {
        try {
            const responseData = await apiService.postData(`/auth/login`, loginData);
            return responseData;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    },


    async register(registerData) {
        try {
            const responseData = await apiService.postData(`/auth/register`, registerData);
            return responseData;
        } catch (error) {
            console.error('Error updating user data:', error);
            throw error;
        }
    },

};