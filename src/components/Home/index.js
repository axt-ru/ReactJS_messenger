import { MessageList  } from '../MessageList/MessageList'
import { Form } from "../Form/Form";
import { useCallback, useEffect } from "react";
import { useParams, Redirect } from 'react-router-dom';
import { ChatList } from "../ChatList";
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameProfile } from "../../store/profile/selectors";
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";
import { connectChatsToFB } from "../../store/chats/actions";
import { connectMessagesToFB, sendMessageWithFB } from "../../store/messages/actions";


function Home() {
    const { chatId } = useParams();
    const chats = useSelector(selectChats);
    const name = useSelector(selectNameProfile);
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(connectChatsToFB());
        dispatch(connectMessagesToFB());
    }, []);

    const handleSendMessage = useCallback(
        (newMessage) => {
            dispatch(sendMessageWithFB(chatId, { ...newMessage, author: name }));
        },
    [chatId, name, dispatch]
);

return (
    <div className="root">
    <ChatList chats={chats} />
    {!!chatId && (
        <div className="messages">
            <MessageList messages={messages[chatId] || []} />
            <Form onSendMessage={handleSendMessage} />
        </div>
    )}
    </div>
);
}

export default Home;