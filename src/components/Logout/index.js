import React from "react";
import { useDispatch } from "react-redux";
import { logoutWithFB } from "../../store/profile/actions";
import './style.css';

export const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutWithFB());
  };

  return <button className="button-logout" onClick={handleClick}>Выйти</button>;
  
};