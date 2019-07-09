import { RECEIVE_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { CLEAR_ERRORS } from '../actions/errors_actions';

const SessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default: 
            return oldState;
    }
};

export default SessionErrorsReducer;