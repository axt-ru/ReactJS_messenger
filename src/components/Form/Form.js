import React, { useState, useRef, useEffect } from 'react';
import { AUTHORS } from '../../constants';
import './Form.css';
import TextField from '@material-ui/core/TextField';

export const Form = ({ onSendMessage }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSendMessage({
      author: AUTHORS.human,
      id: Date.now(),
      text: value,
    });
    setValue('');
    inputRef.current?.focus();
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