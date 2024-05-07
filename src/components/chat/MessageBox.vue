<script setup>
import { defineProps } from 'vue';
import { activeUser } from '../../shared/user.js';

const props = defineProps({
    message: Object,
});

</script>

<template>
    <div
        :class="{ 'item': true, 'right': message.authorName == activeUser.getUser().username, 'left': message.authorName != activeUser.getUser().username }">
        {{ message.content }}
        <div class="signature">{{ message.authorName }}</div>
    </div>
</template>

<style scoped>
.item {
    font-size: 1.2em;
    color: #fff;
    background: rgb(0, 150, 200);

    padding: 20px;
    border-radius: 10px;
    max-width: 50%;
    margin-bottom: 10px;

    position: relative;
    clear: right;
}

.right {
    margin-left: auto;
    text-align: right;
}


.item::after {
    display: block;
    width: 0;
    content: "";
    border: 15px solid transparent;
    position: absolute;
}

.signature {
    color: gray;
}
</style>