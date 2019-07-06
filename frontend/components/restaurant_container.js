import { fetchRestaurant } from '../actions/restaurant_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Restaurant from './restaurant';

const mSP = (state, ownProps) => {
    return ({
        restaurant: state.entities.restaurants[ownProps.match.params.restId]
    });
};

const mDP = (dispatch) => {
    return ({
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
    });
};

export default withRouter(connect(mSP, mDP)(Restaurant));