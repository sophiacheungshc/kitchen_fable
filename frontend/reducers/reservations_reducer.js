import { RECEIVE_ALL_RES, RECEIVE_RES, DELETE_RES } from '../actions/reservation_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const ReservationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_RES:
            return merge({}, action.payload.reservations);
        case RECEIVE_RES:
            return merge({}, oldState, { [action.reservation.id]: action.reservation });
        case DELETE_RES:
            let newState = merge({}, oldState);
            delete newState[action.reservation.id];
            return newState;
        case RECEIVE_RESTAURANT:
            return merge({}, oldState, action.payload.reservations);
        case RECEIVE_REVIEW:
            return merge({}, oldState, { [action.review.res_id]: { review: action.review} });
        case REMOVE_REVIEW:
            return merge({}, oldState, { [action.review.res_id]: { review: null } });
            // let newState = merge({}, oldState);
            // delete newState[action.review.id];
            // return newState;
        default:
            return oldState;
    }
};

export default ReservationsReducer;