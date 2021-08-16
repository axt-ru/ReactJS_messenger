import { AUTHORS } from "../../constants";
import { ADD_CHAT, SEND_MESSAGE, DESTROY_CHAT } from "./actionType";

const initialState = {
    chat_1: {
        messages: [{text: "Текст из первого чата", author: AUTHORS.human, id: "chat_1-1" }],
        name: "Чат №1",
        id: "chat_1"
    },
    chat_2: {
        messages: [{text: "Текст из второго чата", author: AUTHORS.human, id: "chat_2-1" }],
        name: "Чат №2",
        id: "chat_2"
    },
    chat_3: {
        messages: [],
        name: "Чат №3",
        id: "chat_3"
    },
};

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT: {
            return {
                ...state,
                [payload.chatId]: {
                name: payload.name,
                id: payload.chatId,
                messages: [],
            },
        };
    }
    case SEND_MESSAGE: {
        return {
            ...state,
            [payload.chatId]: {
            ...state[payload.chatId],
            messages: [...state[payload.chatId].messages, payload.message],
            },
        };
    }
    case DESTROY_CHAT: {
        const newState = { ...state };
        delete newState[payload];
        return newState;
}
    default: 
        return state;
    }
};