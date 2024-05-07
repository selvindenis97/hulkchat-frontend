import { createMemoryHistory, createRouter } from 'vue-router'

import LoginView from './views/login/LoginView.vue'
import ChatView from './views/chat/ChatView.vue'
import RegisterView from './views/register/RegistrerView.vue'

const routes = [
    { path: '/', component: LoginView },
    { path: '/chat', component: ChatView },
    { path: '/register', component: RegisterView }
]

export default createRouter({
    history: createMemoryHistory(),
    routes,
})