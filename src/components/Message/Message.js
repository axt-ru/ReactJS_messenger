import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AUTHORS } from "../../constants";
import { selectNameProfile } from "../../store/profile/selectors";
import './style.css';

export const Message = ({ text, author }) => {
  const name = useSelector(selectNameProfile);
  return (
    <div className="message">
      {author === AUTHORS.human ? name : author}: {text}
    </div>
  );
};

