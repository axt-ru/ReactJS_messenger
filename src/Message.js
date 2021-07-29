// Lesson 2

import './Message.css';
import React, {useState, useEffect, useCallback} from "react";

export const Message = (props) => {
    const [messageList, setmessageList] = useState([]);

useEffect(() => {
if (!messageList.length || messageList[messageList.length - 1].author === 'Robot') {
    return;
}
    const timeout = setTimeout (() => {
    const robotMessage = { author: 'Robot', text: 'принято', id: Date.now()};
    
    setmessageList([...messageList, robotMessage]);
}, 1200);

return () => clearTimeout(timeout);
}, [messageList]);

const handleClick = useCallback(() => {
    let valueAuthor = document.getElementById('author').value;
    let valueText = document.getElementById('text').value;
    
    const newMessage = {author: valueAuthor, text: valueText, id: 1};

    setmessageList([...messageList, newMessage]);
}, [messageList]);


return (
        <>
        <form action="#">
            <span>Ваше имя(автор)</span>
            <input id="author" type="text"></input>
            <span>Текст сообщения</span>
            <input id="text" type="text"></input>
            <button onClick={handleClick}>Отправить</button>
        </form>
            {messageList.map((m) => (
                <div>{m.author}: {m.text}</div>
            )  )}
{/*             
            <div className = "Message"> Привет будущий {props.specialty}!!!</div>
            <p className = "location">Ты на {props.location} </p> */}
        </>
    
    )

};
