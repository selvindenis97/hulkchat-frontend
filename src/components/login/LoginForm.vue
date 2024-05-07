<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router'
import authService from '../../services/auth/authService';
import { activeUser } from '../../shared/user.js';
import { connectSocket } from '@/shared/socketHandler';

const router = useRouter()

const username = ref("");
const password = ref("");

async function submit(){
    let result = await authService.login({username: username.value, password: password.value});
    if(result){
      activeUser.setUser(result);
      connectSocket();
      router.push('/chat')
    }
}

</script>

<template>
  <div>
    <div class="input-container">
      <input type="text" v-model="username" placeholder="Username" class="input-field">
    </div>
    <div class="input-container">
      <input type="password" v-model="password" placeholder="Password" class="input-field">
    </div>
    <button @click="submit" class="login-button">Login</button>
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

.login-button {
  width: 100%; 
  padding: 10px; 
  background-color: #007bff; 
  color: #fff; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
}

.login-button:hover {
  background-color: #0056b3; 
}
</style>