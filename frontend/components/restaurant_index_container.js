import { fetchAllRestaurants, fetchRestaurant } from '../actions/restaurant_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RestaurantIndex from './restaurant_index';

const mSP = (state) => {
    return ({
        restaurants: Object.values(state.entities.restaurants)
    });
};

const mDP = (dispatch) => {
    return ({
        fetchAllRestaurants: () => dispatch(fetchAllRestaurants()),
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
    });
};

export default withRouter(connect(mSP, mDP)(RestaurantIndex));