import React from "react";
import './style.css'

export const Message = ({ text, author }) => (
  <div className="message">
    {author}: {text}
  </div>
);