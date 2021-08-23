import { PROFILE_CHANGE_NAME, SET_AUTH, SET_ERROR } from './actionTypes'

const initialState = {
    showState: false,
    name: 'Ничей',
    authorized: false,
    error: null,
}

export const profileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PROFILE_CHANGE_NAME: {
            return {
                ...state,
                name: payload,
            };
        }
        case SET_AUTH: {
        return {
            ...state,
            authorized: payload,
            error: null,
        };
    }
        case SET_ERROR: {
        return {
            ...state,
            error: payload,
        };
    }
    default:
        return state;
    }
};