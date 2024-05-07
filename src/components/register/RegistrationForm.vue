<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router'
import authService from '../../services/auth/authService';

const router = useRouter()

const username = ref("");
const password = ref("");

async function submit(){
    let result = await authService.register({username: username.value, password: password.value});
    if(result){
      router.push('/')
    }
}

</script>

<template>
  <input type="text" v-model="username" hint="Username">
  <input type="text" v-model="password" hint="Password">
  <button @click="submit">Register</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>