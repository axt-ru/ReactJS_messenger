import React, { useState, useRef, useEffect } from 'react';
import { AUTHORS } from '../../constants';
import './Form.css';
import TextField from '@material-ui/core/TextField';

export const Form = ({ onSendMessage }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const focusInput = () => {
    inputRef.current.focus();
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

return (
    <form onSubmit={handleSubmit} ref={inputRef}> 
      <TextField id="standard-basic" ref={inputRef} label="Ваш текст" variant="filled" className="textField" type="text" value={value} onChange={handleChange} onLoad={focusInput}></TextField>
      {/* <input className="textField" ref={inputRef} type="text" value={value} onChange={handleChange} /> */}
      <input className="buttonChat" type="submit" onClick={handleSubmit}  />
    </form>
  )
}