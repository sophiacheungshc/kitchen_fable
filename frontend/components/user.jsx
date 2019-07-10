import React from 'react';

class User extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchAllRes(this.props.currentUserId);
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
            return all_upcoming.map( (res, idx) => (
                <div key={idx} className="upcoming-res">
                    <span className="upcoming-res-name">{res.restaurant.name}</span>
                    <span className="upcoming-res-address">{res.restaurant.address}</span>
                    <span className="upcoming-res-datetime">{res.date} at {res.time}</span>
                    <span className="upcoming-res-party">For a party of {res.party}</span>
                    <span className="upcoming-res-occ">Occasion: {res.occasion}</span>
                </div>
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
            return all_past.map((res, idx) => (
                <div key={idx} className="past-res">
                    <span className="past-res-name">{res.restaurant.name}</span>
                    <span className="past-res-address">{res.restaurant.address}</span>
                    <span className="past-res-datetime">{res.date} at {res.time}</span>
                    <span className="past-res-party">For a party of {res.party}</span>
                    <span className="past-res-occ">Occasion: {res.occasion}</span>
                </div>
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
                <div className="upcoming-res-container">
                    <h1>Upcoming Reservations</h1>
                    {this.upcoming()}
                </div> 
                <div className="past-res-container">
                    <h1>Past Reservations</h1>
                    {this.past()}
                </div>
            </div>
        )
    }
}

export default User;