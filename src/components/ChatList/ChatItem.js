import React from 'react';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const ChatItem = ({ id, name, onDelete }) => {
    const handleDelete = () => {
    onDelete(id);
}
    return (
    <ListItem>
        <Link to={`/home/${id}`}>{name}</Link>
        <div style={{cursor: "pointer" }} onClick={handleDelete}>&nbsp;&#10060;</div>
    </ListItem>
    );
}