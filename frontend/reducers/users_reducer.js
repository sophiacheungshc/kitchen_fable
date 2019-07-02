import { RECEIVE_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_USER:
            return merge({}, oldState, { [action.currentUser.id]: action.currentUser });
        default: return oldState;
    }
}

export default UsersReducer;