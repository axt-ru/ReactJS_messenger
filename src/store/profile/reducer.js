import { PROFILE_CHANGE_NAME } from './actionTypes'

const initialState = {
    showState: false,
    name: 'Ничей'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_CHANGE_NAME: {
            return {
                ...state,
                name: action.payload,
            };
        }
            default: 
                return state;
    }

};
