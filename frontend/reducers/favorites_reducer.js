import { merge } from 'lodash';
import { RECEIVE_ALL_FAV, RECEIVE_FAV, DESTROY_FAV } from '../actions/favorite_actions';


const FavoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_FAV:
            return action.favorites;
        case RECEIVE_FAV:
          return merge({}, state, {[action.favorite.id]: action.favorite});
        case DESTROY_FAV:
            let newState = merge({}, state);
            delete newState[action.favorite.id];
            return newState;
        default:
            return state;
    }
};

export default FavoritesReducer;