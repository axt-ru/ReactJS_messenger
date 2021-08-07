import { PROFILE_CHANGE_STATE } from './actions'

const initialState = {
    showState: false,
    name: 'Состояние'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_CHANGE_STATE: {
            return {
                ...state,
                showState: !state.showState,
            };
        }
            default: 
                return state;
    }
};
