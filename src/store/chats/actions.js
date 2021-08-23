import { AUTHORS } from "../../constants";
import { ADD_CHAT, DESTROY_CHAT, SEND_MESSAGE, SET_CHATS, SET_ERROR } from "./actionTypes";
import { db } from "../../services/firebase";

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

const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats,
  });
  
  const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
  });
  
  export const connectChatsToFB = () => (dispatch) => {
    try {
      db.ref("chats").off();
      db.ref("chats").on("value", (snapshot) => {
        let newChats = {};
        snapshot.forEach((snap) => {
          const currentChat = snap.val();
          newChats[currentChat.id] = currentChat;
        });
    
        dispatch(setChats(newChats));
      });
    } catch (e) {
      dispatch(setError(e.message));
    }
  };
  
  export const addChatWithFirebase = (name) => (dispatch) => {
    try {
      const id = `chat-${Date.now()}`;
    
      db.ref("chats").child(id).set({
        name,
        id,
      });
    } catch (e) {
      dispatch(setError(e.message));
    }
  }
  
  export const deleteChatWithFirebase = (id) => (dispatch) => {
    try {
      db.ref("chats").child(id).remove();
    } catch (e) {
      dispatch(setError(e.message));
    }
  };