import { connect } from 'react-redux';
import { createRes } from '../actions/reservation_actions';
import Reservation from './reservation';


const mSP = ({ session }, ownProps) => ({
    currentUserId: session.id,
    restId: ownProps.match.params.restId
});

const mDP = (dispatch) => ({
    createRes: (res) => dispatch(createRes(res))
});

export default connect(mSP, mDP)(Reservation);
