<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import authService from '../../services/auth/authService';

const router = useRouter()

const username = ref("");
const password = ref("");

async function submit() {
    let result = await authService.register({ username: username.value, password: password.value });
    if (result) {
        router.push('/')
    }
}

</script>

<template>

    <div>
        <div class="input-container">
            <input type="text" v-model="username" placeholder="Username" class="input-field">
        </div>
        <div class="input-container">
            <input type="text" v-model="password" placeholder="Password" class="input-field">
        </div>
        <button @click="submit" class="register-button">Register</button>
    </div>
</template>

<style scoped>
.input-container {
    margin-bottom: 10px;
}

.input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.register-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.register-button:hover {
    background-color: #0056b3;
}
</style>