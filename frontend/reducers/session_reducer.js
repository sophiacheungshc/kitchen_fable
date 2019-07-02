import { RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions';

const SessionReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_USER:
            return {id: action.currentUser.id};
        case LOGOUT_USER:
            return {id: null};
        default: return oldState;
    }
}

export default SessionReducer;