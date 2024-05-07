<script setup>
import { defineProps } from 'vue';
import { inject } from 'vue'

const emitter = inject('emitter');

const props = defineProps({
    chat: Object,
    onlineUsers: Array
});

async function chatSelected() {
    emitter.emit('chatSelected', props.chat);
}
</script>

<template>
    <div @click="chatSelected" class="item"
        :class="{ 'online': props.onlineUsers.some((user) => user.username == props.chat.username) }">{{ chat.username ||
            chat.name }}</div>
</template>

<style scoped>
.item {
    padding: 5px;
    margin-right: 5px;
    background-color: gray;
    color: white;
    border-radius: 10%;
    cursor: pointer;
}

.online {
    background-color: green;
}
</style>