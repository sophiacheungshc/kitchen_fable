import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import RestaurantsReducer from './restaurants_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    restaurants: RestaurantsReducer
});

export default EntitiesReducer;