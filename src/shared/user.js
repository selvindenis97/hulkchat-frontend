import { reactive } from 'vue'

export const activeUser = reactive({
    user: null,
    setUser(user) {
        this.user = user;
    },
    getUser() {
        return this.user;
    },
    getJwt() {
        if (this.user) {
            return this.user.jwt;
        }
        return null;
    },
    isLoggedIn() {
        return this.user != null;
    }
})