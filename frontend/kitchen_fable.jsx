import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {login, logout, signup} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    const store = configureStore();
    // window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root);
});