import { MessageList  } from '../MessageList/MessageList'
import { Form } from "../Form/Form";
import { useCallback } from "react";
import { useParams, Redirect } from 'react-router-dom';
import { ChatList } from "../ChatList";
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { destroyChat, messageFromBot } from "../../store/chats/actions";
import { selectChatsHome, selectNameHome } from '../../store/home/selectors';

function Home() {
    const { chatId } = useParams();
    const chats = useSelector(selectChatsHome);
    const name = useSelector(selectNameHome);
    const dispatch = useDispatch();
    
    const handleSendMessage = useCallback(
    (newMessage) => {
        dispatch(messageFromBot(chatId, {...newMessage, author: name}));
    },
    [chatId]
);

const handleDeleteChat = useCallback((id) => {
    dispatch(destroyChat(id));
}, []);

if (!!chatId && !chats[chatId]) {
    return <Redirect to="/nochat" />
}

return (
    <div className="root">
    <ChatList chats={chats} onDeleteChat ={handleDeleteChat} />
    {!!chatId && chats[chatId] && (
    <div className="messages">
        <MessageList messages={chats[chatId].messages} />
        <Form onSendMessage={handleSendMessage} />
    </div>
    )}
    </div>
);
}

export default Home;