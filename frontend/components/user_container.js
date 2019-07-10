import { connect } from 'react-redux';
import User from './user';
import { fetchAllRes, cancelRes } from '../actions/reservation_actions';

const mSP = (state) => ({
    currentUserId: state.session.id,
    reservations: Object.values(state.entities.reservations)
});

const mDP = (dispatch) => ({
    fetchAllRes: userId => dispatch(fetchAllRes(userId)),
    cancelRes: reservationId => dispatch(cancelRes(reservationId))
});

export default connect(mSP,mDP)(User);