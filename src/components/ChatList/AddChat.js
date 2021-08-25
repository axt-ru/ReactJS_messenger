import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { addChatWithFirebase } from "../../store/chats/actions";
import { useInput } from "../../utilities/useInput";

export const AddChat = ({ onAddChat }) => {
    const dispatch = useDispatch();
  
    const { value, handleChange, reset } = useInput("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!value) {
        return;
      }
  
      dispatch(addChatWithFirebase(value));
      reset();
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Введите имя чата" variant="filled" className="textField" value={value} onChange={handleChange}></TextField>
        </form>
    );
};