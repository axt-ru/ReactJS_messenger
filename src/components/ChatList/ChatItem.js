import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import "./style.css";
import { deleteChatWithFirebase } from "../../store/chats/actions";
import { useDispatch } from "react-redux";

export const ChatItem = ({ id, name, onDelete }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteChatWithFirebase(id));
};

    return (
    // <ListItem button selected={selectedIndex == 2} onClick={(event) => handleListItemClick(event, 0)}>
    <ListItem>
        <Link to={`/home/${id}`}>{name}</Link>
        <div style={{cursor: "pointer" }} onClick={handleDelete}>&nbsp;&#10060;</div>
    </ListItem>
    );
};

