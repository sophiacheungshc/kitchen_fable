import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import RestaurantErrorsReducer from './restaurant_errors_reducer';

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    // restaurant: RestaurantErrorsReducer
});

export default ErrorsReducer;