import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Greeting from './greeting';

const mSP = ({ session, entities: { users } }) => {
    return ({
        currentUser: users[session.id]
    });
};

const mDP = dispatch => {
    return ({
        logout: () => dispatch(logout())
    });
};

export default connect(mSP,mDP)(Greeting);