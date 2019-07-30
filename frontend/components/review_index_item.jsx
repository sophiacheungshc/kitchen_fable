import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mDP = (dispatch) => ({
    cancelRes: (id) => dispatch(cancelRes(id))
});

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.cancel = this.cancel.bind(this);
    }
}

export default withRouter(connect(null, mDP)(ReviewIndexItem));