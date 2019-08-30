import { fetchAllRestaurants, searchRestaurants } from '../actions/restaurant_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RestaurantIndex from './restaurant_index';

const mSP = (state) => {
    return ({
        restaurants: Object.values(state.entities.restaurants),
        loading: state.ui.loading
    });
};

const mDP = (dispatch) => {
    return ({
        fetchAllRestaurants: () => dispatch(fetchAllRestaurants()),
        searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword))
    });
};

export default withRouter(connect(mSP, mDP)(RestaurantIndex));