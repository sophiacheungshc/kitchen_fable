import { fetchRestaurant } from '../actions/restaurant_actions';
import { fetchFav, deleteFav, createFav } from '../actions/favorite_actions';
import { openModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Restaurant from './restaurant';

const mSP = (state, ownProps) => {
    return ({
        restaurant: state.entities.restaurants[ownProps.match.params.restId],
        reviews: state.entities.reviews,
        users: state.entities.users,
        currentUserId: state.session.id
    });
};

const mDP = (dispatch) => {
    return ({
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
        fetchFav: (id) => dispatch(fetchFav(id)),
        deleteFav: (restId) => dispatch(deleteFav(restId)),
        createFav: (restId) => dispatch(createFav(restId)),
        openModal: (modal) => dispatch(openModal(modal))
    });
};

export default withRouter(connect(mSP, mDP)(Restaurant));