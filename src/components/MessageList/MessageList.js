// Lesson 3

import React, { useCallback } from "react";
import { Message } from "../Message/Message";

export const MessageList = ({ messages }) => {

  const renderMessage = useCallback((mess) => (
    <Message text={mess.text} author={mess.author} key={mess.id} />
  ), []);

  return messages.map(renderMessage);
};