import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancelRes } from '../actions/reservation_actions';

const mDP = (dispatch) => ({
    cancelRes: (id) => dispatch(cancelRes(id))
});

class ReservationIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    handleClick() {
        this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
    }

    cancel(e){
        e.preventDefault();
        this.props.cancelRes(this.props.reservation.id);
    }
    checkCancel(){
        return this.props.cancel ? (<button className="res-cancel-btn"onClick={this.cancel}>Cancel Reservation</button>) : (<></>)
    }

    render() {
        const { name, address } = this.props.restaurant;
        const { date, time, party, occasion } = this.props.reservation;
        const img = Math.floor(Math.random() * 20) + 1;
        return (
            <div className="reserve-index-item">
                <img className="res-thumb" onClick={this.handleClick} src={`/assets/${img}.jpg`} />

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

export default withRouter(connect(null, mDP)(ReservationIndexItem));
