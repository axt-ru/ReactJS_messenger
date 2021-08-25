import React, { useContext } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { AddChat} from './AddChat';
import { ChatItem } from './ChatItem';
import './style.css';

export const ChatList = ({ chats, onDeleteChat, onAddChat }) => {
  return (
    <List>
      {Object.values(chats).map((c) => (
          <ChatItem
            name={c.name}
            key={c.id}
            id={c.id}
            onDelete={onDeleteChat}
          />
        ))}
        <ListItem>
          <AddChat onAddChat={onAddChat} />
        </ListItem>    
    </List>
  );
};

