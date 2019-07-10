import React from 'react';

class User extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchAllRes(this.props.currentUserId);
    }

    upcoming(){
        debugger
        if (this.props.reservations.length !== 0){
            // this.props.reservations.map((res) => {
            //     return(
            //         <div className="upcoming-res">
            //             <span>{res.restaurant.name}</span>
            //             <span>{res.restaurant.address}</span>
            //             <span>{res.date} at {res.time}</span>
            //             <span>For a party of {res.party}</span>
            //             <span>Occasion: {res.occasion}</span>
            //         </div>
            //     )
            const allRes = Object.values(this.props.reservations);
            allRes.forEach((reservation) => {
                return <div>{reservation.restaurant.name}</div>
            });

        } else {
            return (<div className="no-upcoming">No upcoming reservations.</div>)
        }
    }

    // past(){

    // }

    render(){
        return (
            <div className="user-show-container">
                <div className="upcoming-res-container">
                    <h1>Upcoming Reservations</h1>
                    {this.upcoming()}
                </div>
                <div className="past-res-container">
                    {/* {this.past()} */}
                </div>
            </div>
        )
    }
}

export default User;