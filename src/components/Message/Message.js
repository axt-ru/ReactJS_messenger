import React from "react";
import { useSelector } from "react-redux";
import { AUTHORS } from "../../constants";
import { selectNameHome } from "../../store/home/selectors";
import './style.css';

export const Message = ({ text, author }) => {
  const name = useSelector(selectNameHome);
  return (
    <div className="message">
      {author === AUTHORS.human ? name : author}: {text}
    </div>
  );
};

