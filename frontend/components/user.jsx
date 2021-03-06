import React from 'react';
import { withRouter } from 'react-router-dom';
import ReservationIndexItem from './reserve_index_item';
import FavoriteIndexItem from './favorite_index_item';

class User extends React.Component {
    constructor(props){
        super(props);

        this.scrollTo = this.scrollTo.bind(this);
        this.all_saved = this.all_saved.bind(this);
    }

    componentDidMount(){
        document.getElementsByClassName('navbar')[0].scrollIntoView();
        this.props.fetchAllRes(this.props.currentUserId);
        this.props.fetchFavs(this.props.currentUserId);
    }

    handleClick() {
        this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
    }

    scrollTo(el) {
        return () => {
            el.scrollIntoView({
                behavior: 'smooth',
                block: "start"
            });
        };
    }

    all_saved(){
        let favs = this.props.favorites;

        if (Object.keys(favs).length === 0) {
            return (
                <div className="no-res">No saved restaurants.</div>
            );
        } else {
            return Object.values(favs).map((fav, idx) => (
                <FavoriteIndexItem restaurant={fav.restaurant} fav={fav} key={idx} />
            ));
        }
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

        all_upcoming = this.sortDates(all_upcoming, false);

        if (all_upcoming.length !== 0){
            return all_upcoming.map((res, idx) => (
                <ReservationIndexItem restaurant={res.restaurant} reservation={res} cancel={true} key={idx} />
            ));
        } else {
            return (
                <div className="no-res">No upcoming reservations.</div>
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

        all_past = this.sortDates(all_past, true);

        if (all_past.length !== 0) {
            return all_past.map((res, idx) => (
                <ReservationIndexItem restaurant={res.restaurant} 
                    reservation={res} review={res.review ? this.props.reviews[res.review.id] : null}
                    cancel={false} key={idx} />
            ));
        } else {
            return (
                <div className="no-res">No past reservations.</div>
            )
        }

    }

    sortDates(arr, desc){
        if (arr.length <= 1) return arr;

        let mid = Math.floor(arr.length/2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        let comparator;

        if (desc) {
            comparator = function(left, right) {
                return left > right ? -1 : 1;
            }
        } else {
            comparator = function (left, right) {
                return left < right ? -1 : 1;
            }
        }

        return this.merge(this.sortDates(left, desc), this.sortDates(right, desc), comparator);
    }

    merge(left, right, comparator){
        let result = [];

        while (left.length && right.length){
            switch (comparator(Date.parse(left[0].date), Date.parse(right[0].date))){
                case -1:
                    result.push(left.shift());
                    break;
                case 1:
                    result.push(right.shift());
                    break;
            }
        }

        return result.concat(left).concat(right);
    }

    render(){
        return (
            <div className="user-show-container">
                <div className="user-show-sidebar">
                    <span onClick={this.scrollTo(this.upcomingSection)}>Upcoming Reservations</span>
                    <span onClick={this.scrollTo(this.pastSection)}>Past Reservations</span>
                    <span onClick={this.scrollTo(this.savedSection)}>Saved Restaurants</span>
                </div>
                <div className="res-index">
                    <div className="upcoming-res-container" ref={el => this.upcomingSection = el}>
                        <h1>Upcoming Reservations</h1>
                        {this.upcoming()}
                    </div>
                    <div className="past-res-container" ref={el => this.pastSection = el}>
                        <h1>Past Reservations</h1>
                        {this.past()}
                    </div>
                    <div className="saved-container" ref={el => this.savedSection = el}>
                        <h1>Saved Restaurants</h1>
                        {this.all_saved()}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(User);