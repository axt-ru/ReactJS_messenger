import { AUTHORS } from "../../constants";
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

let timeout;

export const messageFromBot = (chatId, message) => (dispatch) => {
    dispatch(sendMessage(chatId, message));

    if (timeout) { 
        clearTimeout(timeout); 
    }

    timeout = setTimeout(() => {
        dispatch(
            sendMessage(chatId, { author: AUTHORS.robot, text: "Принято" })
        );
    }, 1000);
};