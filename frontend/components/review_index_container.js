import { connect } from 'react-redux';
import { fetchReviews } from '../actions/review_actions';
import ReviewIndex from './review_index';

const mSP = (state, ownProps) => {
    return {
        reviews: state.entities.reviews,
        restId: ownProps.match.params.restId,
        restaurant: state.entities.restaurants[ownProps.match.params.restId],
        currentUserId: state.session.id
    };
};

const mDP = dispatch => ({
    fetchReviews: restId => dispatch(fetchReviews(restId))
});

export default connect(mSP, mDP)(ReviewIndex);