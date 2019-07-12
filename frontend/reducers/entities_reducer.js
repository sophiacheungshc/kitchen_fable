import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import RestaurantsReducer from './restaurants_reducer';
import ReservationsReducer from './reservations_reducer';
import FavoritesReducer from './favorites_reducer';
import ReviewsReducer from './reviews_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    restaurants: RestaurantsReducer,
    reservations: ReservationsReducer,
    favorites: FavoritesReducer,
    reviews: ReviewsReducer
});

export default EntitiesReducer;