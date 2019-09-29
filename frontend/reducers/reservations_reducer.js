import { RECEIVE_ALL_RES, RECEIVE_RES, DELETE_RES } from '../actions/reservation_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_USER } from '../actions/session_actions';

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
            //Object.assign only dups one layer deep, need to pre-fix the state first
            var oldRes = oldState[action.review.res_id];
            var fixedRes = Object.assign({}, oldRes, {review: action.review});
            return Object.assign({}, oldState, { [action.review.res_id]: fixedRes });
        case REMOVE_REVIEW:
            var oldRes = oldState[action.review.res_id];
            var fixedRes = Object.assign({}, oldRes, { review: null });
            return Object.assign({}, oldState, { [action.review.res_id]: fixedRes });
        // put user's reservation data in global state upon user log in
        case RECEIVE_USER:
            return Object.assign({}, action.payload.reservations);
        default:
            return oldState;
    }
};

export default ReservationsReducer;