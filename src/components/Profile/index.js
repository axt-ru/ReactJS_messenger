import React, { useState } from "react";
import { changeName, PROFILE_CHANGE_NAME } from '../../store/profile/actions';
import './style.css';
import { useSelector, useDispatch } from "react-redux";
import { selectNameProfile } from "../../store/profile/selectors";


export default function Profile() {
    const [value, setValue] = useState('');
    const name = useSelector(selectNameProfile);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeName(value));
        setValue("");
    };
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    return (
        <>
        <h2 style={{textAlign: "center"}}>Профиль участника</h2>
        <h3> Имя участника: <span>{name}</span></h3>
        {/* {showState && <div className="state">{name}</div>} */}
        <form action="" onSubmit={handleSubmit}>
            <input className="nameProfile" value={value} onChange={handleChange} />
            <br />
            <button className="buttonProfile" onClick={handleSubmit}>Сохранить имя</button>
        </form>
        </>
    );
}