import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveUser = (payload) => ({
    type: RECEIVE_USER,
    payload
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


export const signup = (user) => (dispatch) => (
    SessionAPI.signup(user).then ( (user) => dispatch(receiveUser(user)),
        (error) => (dispatch(receiveErrors(error.responseJSON)))
    )
);

export const login = (user) => (dispatch) => (
    SessionAPI.login(user).then((user) => dispatch(receiveUser(user)),
        (error) => (dispatch(receiveErrors(error.responseJSON)))
    )
);


export const logout = () => (dispatch) => (
    SessionAPI.logout().then(() => dispatch(logoutUser()))
);
