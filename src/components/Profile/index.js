import React from "react";
import { useCallback } from "react";
import { PROFILE_CHANGE_STATE } from '../../store/profile/actions';
import './style.css';
import { useSelector, useDispatch } from "react-redux";

export default function Profile() {
    const { showState, name } = useSelector((state) => state);
    console.log({ showState, name });
    const dispatch = useDispatch();

    const toggleShowState = useCallback(() => {
        dispatch({
            type: PROFILE_CHANGE_STATE,
        })
    }, [dispatch]); 


    return (
        <>
        <h3 style={{textAlign: "center"}}>Это профиль участника</h3>
        {showState && <div className="state">{name}</div>}
        <input style={{width: "30px", height: "30px"}} className="state" 
            type="checkbox"
            checked={showState}
            value={showState}
            onChange={toggleShowState}
            />
        </>
    );
}