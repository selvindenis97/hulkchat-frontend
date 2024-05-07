<script setup>
import { ref } from 'vue';
import { activeUser } from '../../shared/user.js';
import messageService from '@/services/messages/messageService.js';
import { activeChat } from '../../shared/activeChat.js';
import { sendMessage } from '@/shared/socketHandler.js';
import { inject } from 'vue';

const content = ref("");

const emitter = inject('emitter');


function getChatId() {
    let chat = activeChat.getChat();
    return chat.channelId || chat.userId;
}

async function send() {
    let message = await messageService.sendMessage(getChatId(), content.value);
    sendMessage(message);
    emitter.emit("messageSent");
    content.value = "";
}
</script>

<template>
    <div class="input-container" v-if="activeChat.getChat()">
        <input v-model="content" placeholder="Type your message here..." class="input-field">
        <button @click="send" class="send-button">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M3.707 9.293a1 1 0 0 1 1.414 0L10 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
                    clip-rule="evenodd" />
            </svg>
        </button>
    </div>
</template>

<style scoped>
.input-container {
    display: flex;
    width: 100%;
    margin-top: 10px;
}

.input-field {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
    border-right: none;
}

.send-button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 0 5px 5px 0;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

.send-button .icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
}
</style>