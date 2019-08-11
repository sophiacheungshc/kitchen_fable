import * as ResAPI from '../util/reservation_api_util';

export const RECEIVE_ALL_RES = 'RECEIVE_ALL_RES';
export const RECEIVE_RES = 'RECEIVE_RES';
export const DELETE_RES = 'DELETE_RES';

export const receiveRes = (reservation) => ({
    type: RECEIVE_RES,
    reservation
});

export const receiveAllRes = (payload) => ({
    type: RECEIVE_ALL_RES,
    payload
});
export const deleteRes = (reservation) => ({
    type: DELETE_RES,
    reservation
});

export const createRes = (res) => (dispatch) => (
    ResAPI.createReservation(res).then( (res) => dispatch(receiveRes(res)))
);

export const fetchRes = (id) => (dispatch) => (
    ResAPI.fetchReservation(id).then( (res) => dispatch(receiveRes(res)))
);

export const fetchAllRes = (userId) => (dispatch) => (
    ResAPI.fetchAllReservations(userId).then( (res) => dispatch(receiveAllRes(res)))
);
export const cancelRes = (id) => (dispatch) => (
    ResAPI.deleteReservation(id).then( (res) => dispatch(deleteRes(res)))
);