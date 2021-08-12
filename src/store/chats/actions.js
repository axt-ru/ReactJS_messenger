import { ADD_CHAT, DESTROY_CHAT, SEND_MESSAGE } from "./actionType";

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        chatId,
        name,
    },
});

export const sendMessage = (chatId, message) => ({
    type: SEND_MESSAGE,
    payload: {
        chatId,
        message,
    },
});

export const destroyChat = (chatId) => ({
    type: DESTROY_CHAT,
    payload: chatId,
});