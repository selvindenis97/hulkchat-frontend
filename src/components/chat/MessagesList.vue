<script setup>
import { onUpdated, ref } from 'vue';
import { inject } from 'vue'
import messageService from '../../services/messages/messageService';
import MessageBox from './MessageBox.vue';
import { activeChat } from '../../shared/activeChat.js';


const emitter = inject('emitter');
const messages = ref();
const messageListRef = ref(null);


emitter.on('chatSelected', handleUserClick);
emitter.on('messageReceived', handleReceivedMessage);
emitter.on('messageSent', refreshChat);


onUpdated(() => {
    scrollToBottom();
})

function loadMessages() {
    if (activeChat.getChat().userId) {
        messages.value = messageService.getUserMessages(activeChat.getChat().userId).then((messagesResult) => {
            messages.value = messagesResult;
            scrollToBottom();
        })
    } else if (activeChat.getChat().channelId) {
        messages.value = messageService.getChannelMessages(activeChat.getChat().channelId).then((messagesResult) => {
            messages.value = messagesResult;
            scrollToBottom();
        })
    }
}

function refreshChat() {
    loadMessages();
}

function handleReceivedMessage(message) {
    if (activeChat.getChat().userId) {
        if (message.authorId == activeChat.getChat().userId) {
            messages.value = messageService.getUserMessages(activeChat.getChat().userId).then((messagesResult) => {
                messages.value = messagesResult;
                scrollToBottom();
            })
        }
    } else if (activeChat.getChat().channelId) {
        if (activeChat.getChat().channelId == message.receiverId) {
            messages.value = messageService.getChannelMessages(activeChat.getChat().channelId).then((messagesResult) => {
                messages.value = messagesResult;
                scrollToBottom();
            })
        }
    }
}

function handleUserClick(selectedChat) {
    activeChat.setChat(selectedChat);
    loadMessages();
}

function scrollToBottom() {
    const lastMessage = messageListRef.value.lastElementChild;

    if (lastMessage) {
        lastMessage.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
}

</script>

<template>
    <div v-if="!activeChat.getChat()" class="message-list-container">
        <p>Choose a person to start chatting</p>
    </div>
    <div ref="messageListRef" v-if="activeChat.getChat()" class="message-list-container">
        <template v-for="message in messages" :key="message.id">
            <MessageBox :message="message" />
        </template>
    </div>
</template>

<style>
.message-list-container {
    padding: 10px;
    background-color: white;
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
</style>