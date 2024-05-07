import { io } from "socket.io-client";
import { activeUser } from "./user";

var socket;


export function connectSocket() {
    socket = io(import.meta.env.VITE_SOCKET_URL);
    socket.on("connect", () => {
        socket.emit("addNewUser", activeUser.getUser().username);
    });

}

export function getSocket() {
    return socket;
}

// Function to send a message via socket
export function sendMessage(message) {
    socket.emit("newMessage", message);
}

// Function to handle incoming messages
export function receiveMessage(callback) {
    socket.on("message", callback);
}

// Function to disconnect the socket
export function disconnectSocket() {
    socket.disconnect();
}