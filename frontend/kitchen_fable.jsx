import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {fetchAllRestaurants, fetchRestaurant} from './actions/restaurant_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.fetchAllRestaurants = fetchAllRestaurants;
    // window.fetchRestaurant = fetchRestaurant;
    ReactDOM.render(<Root store={store}/>, root);
});