<script setup>
import LoginForm from '../../components/login/LoginForm.vue';


</script>

<template>
    <div>
      <div>
        <LoginForm/>
      </div>
      <div>
        <RouterLink to="/register" class="register-link">Register</RouterLink>
      </div>
    </div>
  </template>
  
  <style scoped>
  
  .register-link {
    font-weight: bold;
    color: #007bff; 
    text-decoration: none; 
    cursor: pointer; 
  }
  
  
  .login-button {
    font-weight: bold;
  }
  </style>