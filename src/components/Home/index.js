import { MessageList  } from '../MessageList/MessageList'
import { Form } from "../Form/Form";
import { AUTHORS } from "../../constants";
import { useEffect, useState, useCallback } from "react";
import { useParams, Redirect } from 'react-router-dom';
import { ChatList } from "../ChatList"
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, destroyChat } from "../../store/chats/actions";
import { selectNameHome, setTimeoutHome } from '../../store/home/selectors';

const initialChats = {
    chat_1: {
        messages: [{text: "Текст из первого чата", author: AUTHORS.human, id: "chat_1-1" }],
        name: "Чат первый",
        id: "chat_1"
    },
    chat_2: {
        messages: [{text: "Текст из второго чата", author: AUTHORS.human, id: "chat_2-1" }],
        name: "Чат второй",
        id: "chat_2"
    },
    chat_3: {
        messages: [],
        name: "Чат третий",
        id: "chat_3"
    },
};

function Home() {
    const { chatId } = useParams();
   // const [chats, setChats] = useState(initialChats);
    const chats = useSelector(selectNameHome);
    const dispatch = useDispatch();
    
    const handleSendMessage = useCallback(
    (newMessage) => {
        // setChats({
        //     ...chats, 
        //     [chatId]: {
        //         ...chats[chatId],
        //         messages: [...chats[chatId].messages, newMessage],
        //     }, 
        // });
        dispatch(sendMessage(chatId, newMessage));
    },
    [chatId]
);


useEffect(() => {
    if ( !chatId ||
    !chats[chatId]?.messages.length ||
    chats[chatId].messages[chats[chatId].messages.length - 1].author === AUTHORS.robot ) 
    {
    return;
}

const timeout = setTimeout(() => {
    const newMessage = {
        text: "Принято",
        author: AUTHORS.robot,
        id: Date.now(),
    };

    handleSendMessage(newMessage);
}, 1000);

// const timeout = setTimeout(setTimeoutHome);
//     return () => clearTimeout(timeout);

}, [chats]);

const handleDeleteChat = useCallback((id) => {
    dispatch(destroyChat(id));
}, []);

if (!!chatId && !chats[chatId]) {
    return <Redirect to="/nochat" />
}

return (
    <div className="root">
    <ChatList chats={chats} onDeleteChat ={handleDeleteChat} />
    {!!chatId && (
    <div className="messages">
        <MessageList messages={chats[chatId].messages} />
        <Form onSendMessage={handleSendMessage} />
    </div>
    )}
    </div>
);
}

export default Home;