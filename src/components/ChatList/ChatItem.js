import React from 'react';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./style.css";

export const ChatItem = ({ id, name, onDelete }) => {
    const handleDelete = () => {
    onDelete(id);
}

const [selectedIndex, setSelectedIndex] = React.useState(1);

const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    }

    return (
    <ListItem button selected={selectedIndex == 2} onClick={(event) => handleListItemClick(event, 0)}>
        <Link to={`/home/${id}`}>{name}</Link>
        <div style={{cursor: "pointer" }} onClick={handleDelete}>&nbsp;&#10060;</div>
    </ListItem>
    );
}

