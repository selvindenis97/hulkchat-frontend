<script setup>
import { activeUser } from '../../shared/user.js';
import MessagesList from './MessagesList.vue';
import MessageInput from './MessageInput.vue';
import UserList from '../users/UserList.vue';
import { inject } from 'vue'
import { getSocket, disconnectSocket } from '@/shared/socketHandler.js';
import { onMounted } from 'vue';
import { activeChat } from '@/shared/activeChat';
import { useRouter } from 'vue-router'


const router = useRouter()
const emitter = inject('emitter');

console.log(activeUser.getUser());

function logout() {
    disconnectSocket();
    activeChat.setChat(null);
    activeUser.setUser(null);
    router.push('/');
}

function subscribeToMessageUpdates() {
    var socket = getSocket();

    socket.on(`${activeUser.getUser().userId}`, (message) => {
        emitter.emit("messageReceived", message);
    })
}

onMounted(async () => {
    subscribeToMessageUpdates();
});

</script>

<template>
    <div class="container">
        <div class="logout-button">
            <button @click="logout" class="logout-btn">Logout</button>
        </div>
        <div class="user-list">
            <UserList />
        </div>
        <div class="messages-list">
            <MessagesList />
        </div>
        <div class="message-input">
            <MessageInput />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 80%;
}

.user-list {
    flex: 0 0 10%;
}

.messages-list {
    flex: 1;
    overflow-y: auto;
}

.message-input {
    flex: 0 0 10%;
}

.logout-button {
    width: 10%;
    margin-bottom: 10px;
}
</style>