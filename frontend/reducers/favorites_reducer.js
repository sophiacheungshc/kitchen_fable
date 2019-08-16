import { RECEIVE_ALL_FAV } from '../actions/favorite_actions';


const FavoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_FAV:
            return action.favorites;
        default:
            return state;
    }
};

export default FavoritesReducer;