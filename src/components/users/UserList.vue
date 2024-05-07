<script setup>
import { ref, onMounted } from 'vue';
import userService from '../../services/users/userService';
import channelService from '../../services/channels/channelService';
import UserItem from './UserItem.vue';
import { getSocket } from '@/shared/socketHandler';

const chatsList = ref([]);

const onlineUsers = ref([]);

async function getUsers() {
    let result = await userService.getUsers();
    if (result) {
        chatsList.value = result;
    }
}

async function getChannels() {
    let result = await channelService.getChannels();
    if (result) {
        var existing = chatsList.value;
        chatsList.value = [...existing, ...result];
    }
}

function subscribeToUserUpdates() {
    var socket = getSocket();

    socket.on("usersUpdated", (users) => {
        onlineUsers.value = users;
    })
}

onMounted(async () => {
    await getUsers();
    getChannels();
    subscribeToUserUpdates();
});

</script>

<template>
    <div class="user-items">
        <div class="user-item-container">
            <!-- Iterate over the userList and dynamically render FileB for each user -->
            <template v-for="chat in chatsList" :key="chat.id">
                <UserItem :chat="chat" :onlineUsers="onlineUsers" />
            </template>
        </div>
    </div>
</template>

<style scoped>
.user-items {
    overflow-x: auto;
    /* Enable horizontal scrolling */
}

.user-item-container {
    display: flex;
    flex-direction: row;
    min-width: 90%;
    /* Display items horizontally */
}
</style>