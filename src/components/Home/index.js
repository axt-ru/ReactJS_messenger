import { MessageList  } from '../MessageList/MessageList'
import { Form } from "../Form/Form";
import { AUTHORS } from "../../constants";
import { useEffect, useState, useCallback } from "react";
import { useParams } from 'react-router';
import { ChatList } from "../ChatList"
import './style.css'

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
    const [chats, setChats] = useState(initialChats);
        
const handleSendMessage = useCallback(
    (newMessage) => {
        setChats({
            ...chats, 
            [chatId]: {
                ...chats[chatId],
                messages: [...chats[chatId].messages, newMessage],
            }, 
        });
    },
    [chats, chatId]
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

    return () => clearTimeout(timeout);
}, [chats]);

return (
    <div className="root">
    <ChatList chats={chats}/>
    {!!chatId && (
    <div>
        <MessageList messages={chats[chatId].messages} />
        <Form onSendMessage={handleSendMessage} />
    </div>
    )}
    </div>
);
}

export default Home;