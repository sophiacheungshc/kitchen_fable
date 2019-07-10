import React from 'react';
import { withRouter } from 'react-router-dom';
import ReservationIndexItem from './reserve_index_item';

class User extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchAllRes(this.props.currentUserId);
    }

    handleClick() {
        this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
    }


    upcoming(){

        let all = this.props.reservations;
        let all_upcoming = [];
        let today = new Date();
        all.forEach((reservation) => {
            if (Date.parse(today.toISOString().substring(0, 10)) <= Date.parse(reservation.date)) {
                all_upcoming.push(reservation);
            }
        });

        if (all_upcoming.length !== 0){
            return all_upcoming.map(res => (
                <ReservationIndexItem restaurant={res.restaurant} reservation={res} key={res.id} />
            ));
        } else {
            return (
                <div className="no-upcoming">No upcoming reservations.</div>
            )
        }
    }

    past(){

        let all = this.props.reservations;
        let all_past = [];
        let today = new Date();
        all.forEach((reservation) => {
            if (Date.parse(today.toISOString().substring(0, 10)) > Date.parse(reservation.date)) {
                all_past.push(reservation);
            }
        });

        if (all_past.length !== 0) {
            return all_past.map(res => (
                <ReservationIndexItem restaurant={res.restaurant} reservation={res} key={res.id} />
            ));
        } else {
            return (
                <div className="no-past">No past reservations.</div>
            )
        }

    }

    render(){
        return (
            <div className="user-show-container">
                <div className="user-show-sidebar">
                    <span>Upcoming Reservations</span>
                    <span>Past Reservations</span>
                    <span>My Favorites</span>
                </div>
                <div className="res-index">
                    <div className="upcoming-res-container">
                        <h1>Upcoming Reservations</h1>
                        {this.upcoming()}
                    </div>
                    <div className="past-res-container">
                        <h1>Past Reservations</h1>
                        {this.past()}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(User);