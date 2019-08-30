import {
    LOAD_RESTAURANTS
} from '../actions/restaurant_actions';

const initialState = {
    isLoading: false
};

const LoadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOAD_RESTAURANTS:
            return Object.assign({}, {isLoading: true});
        default:
            return state;
    }
};

export default LoadingReducer;