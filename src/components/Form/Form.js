import React, { useState, useRef, useEffect } from 'react';
import { AUTHORS } from '../../constants';
import './Form.css';
import { useInput } from '../../utilities/useInput';
import TextField from '@material-ui/core/TextField';

export const Form = ({ onSendMessage }) => {
  const inputRef = useRef();
  const { value, handleChange, reset } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSendMessage({
      id: Date.now(),
      text: value,
    });
    reset();
}

useEffect(() => {
  inputRef.current?.focus();
}, []);

return (
    <form onSubmit={handleSubmit}> 
      <TextField id="standard-basic" inputRef={inputRef} label="Ваш текст" variant="filled" className="textField" type="text" value={value} onChange={handleChange}></TextField>
      <input className="buttonChat" type="submit" onClick={handleSubmit}  />
    </form>
  )
}