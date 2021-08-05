import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";

export const ChatList = ({ chats }) => {
  return (
    <List>
      {Object.values(chats).map((c) => (
        <ListItem key={c.id}>
          <Link to={`/home/${c.id}`}>{c.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};