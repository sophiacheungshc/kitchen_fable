import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_RESTAURANT:
            return Object.assign({}, oldState, action.payload.users);
        default: 
            return oldState;
    }
};

export default UsersReducer;