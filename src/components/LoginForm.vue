<script setup>
import {ref} from 'vue';
import authService from '../services/auth/authService';

const username = ref("");
const password = ref("");

async function submit(){
    await authService.login({username: username.value, password: password.value});
}

</script>

<template>
  <input type="text" v-model="username" hint="Username">
  <input type="text" v-model="password" hint="Password">
  <button @click="submit">Login</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>