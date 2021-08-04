import logo from './logo.svg';
import './App.css';
import { MessageList  } from './components/MessageList/MessageList'
import { Form } from "./components/Form/Form";
import { AUTHORS } from "./constants";
import { ChatList } from "./components/ChatList";
import { useEffect, useState, useCallback } from "react";

function App() {
    const [messages, setMessages] = useState([
    { text: "Текст", author: AUTHORS.human, id: 1 },
  ]);

  const handleSendMessage = useCallback(
    (newMessage) => {
      setMessages([...messages, newMessage]);
    },
    [messages]
  );

  useEffect(() => {
    if ( !messages.length || messages[messages.length - 1].author === AUTHORS.robot
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "Принято",
        author: AUTHORS.robot,
        id: Date.now(),
      };

      setMessages([...messages, newMessage]);
    }, 1000);

    

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Чаты
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <ChatList />
      <div className="form">
        <Form onSendMessage={handleSendMessage} /></div>
      <div className="messageList"><MessageList messages={messages} /></div>
    </div>
  );
}

export default App;
