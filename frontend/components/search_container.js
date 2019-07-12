import { connect } from 'react-redux';
import { searchRestaurants } from '../actions/restaurant_actions';
import Search from './search';
import { withRouter } from 'react-router-dom';

const mSP = state => ({
    restaurants: Object.values(state.entities.restaurants)
});
const mDP = dispatch => ({
    searchRestaurants: keyword => dispatch(searchRestaurants(keyword))
});

export default withRouter(connect(mSP, mDP)(Search));