import { RECEIVE_ALL_RES, RECEIVE_RES, DELETE_RES } from '../actions/reservation_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const ReservationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_RES:
            return Object.assign({}, action.payload.reservations);
        case RECEIVE_RES:
            return Object.assign({}, oldState, { [action.reservation.id]: action.reservation });
        case DELETE_RES:
            let newState = Object.assign({}, oldState);
            delete newState[action.reservation.id];
            return newState;
        case RECEIVE_RESTAURANT:
            return Object.assign({}, oldState, action.payload.reservations);
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, { [action.review.res_id]: { review: action.review} });
        case REMOVE_REVIEW:
            return Object.assign({}, oldState, { [action.review.res_id]: { review: null } });
        default:
            return oldState;
    }
};

export default ReservationsReducer;