import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const chats = [
    {
        name: "Chat 1",
        id: (Date.now())+1,
    },
    {
        name: "Chat 2",
        id: Date.now(),
    },
    {
        name: "Chat 3",
        id: (Date.now())+2,
    },
];

export const ChatList = () => {
  return (
    <List>
      {chats.map((c) => (
        <ListItem key={c.id}>{c.name}</ListItem>
      ))}
    </List>
  );
};