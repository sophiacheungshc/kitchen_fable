import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancelRes } from '../actions/reservation_actions';

const mDP = (dispatch) => ({
    cancelRes: (id) => dispatch(cancelRes(id)),

});

class ReviewForm extends React.Component {
    constructor(props) {


    }

    render(){
        return(
            <div className="review-form-container">
                This is the review form
            </div>
        )
    }
}

export default withRouter(connect(null, mDP)(ReviewForm));
