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

    render() {
        const { name, address } = this.props.restaurant;
        const { date, time, party, occasion, photo } = this.props.reservation;

        const style = {
            backgroundImage: 'url(' + photo + ')',
        };

        return (
            <div className="reserve-index-item">
                <div className="fav-thumb" onClick={this.handleClick} style={style}></div>

                <div className="res-item-info">
                    <span className="res-item-name" onClick={this.handleClick}>{name}</span>
                    <span className="res-item-address">{address}</span>
                    <span className="res-item-datetime">{date} at {time}</span>
                    <span className="res-item-occ">Occasion: {occasion}</span>
                    <span className="res-item-party">For a party of {party}.</span>
                    {this.checkCancel()}
                </div>

            </div>
        );
    }
}

export default withRouter(connect(null, mDP)(ReviewIndexItem));