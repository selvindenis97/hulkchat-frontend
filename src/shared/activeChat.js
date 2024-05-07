import { reactive } from 'vue'

export const activeChat = reactive({
    chat: null,
    setChat(chat) {
        this.chat = chat;
    },
    getChat() {
        return this.chat;
    }
})