import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createRes } from '../actions/reservation_actions';

import Reservation from './reservation';


const mSP = ({ session }, ownProps) => {
    return ({
        currentUserId: session.id,
        restId: ownProps.match.params.restId
    })
};

const mDP = (dispatch) => ({
    createRes: (res) => dispatch(createRes(res))
});

export default withRouter(connect(mSP, mDP)(Reservation));
