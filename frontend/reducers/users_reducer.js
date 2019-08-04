import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';

import merge from 'lodash/merge';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_USER:
            return merge({}, oldState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_RESTAURANT:
            // return merge({}, oldState, action.payload.users);
            return action.payload.users;
        default: 
            return oldState;
    }
};

export default UsersReducer;