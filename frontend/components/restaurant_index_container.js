import { fetchAllRestaurants, fetchRestaurant } from '../actions/restaurant_actions';
import { connect } from 'react-redux';
import RestaurantIndex from '../components/restaurant_index';

const mSP = (state) => {
    return {
        restaurants: Object.values(state.restaurants)
    }
}

const mDP = (dispatch) => {
    return {
        fetchAllRestaurants: () => dispatch(fetchAllRestaurants()),
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
    }
}

export default connect(mSP, mDP)(RestaurantIndex);