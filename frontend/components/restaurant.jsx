import React from 'react';
import { withRouter } from 'react-router-dom';
import Map from './map';
import ReservationContainer from './reservation_container';
import ReviewIndex from './review_index';

class Restaurant extends React.Component {
    constructor(props){
        super(props);

        this.checkFav = this.checkFav.bind(this);
        this.deleteFav = this.deleteFav.bind(this);
        this.createFav = this.createFav.bind(this);
        this.scrollTo = this.scrollTo.bind(this);

    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restId);
    }

    scrollTo(el) {
        document.getElementsByClassName('tab-selected')[0].classList.remove('tab-selected');
        if (el === this.overviewSection) {
            document.getElementById('overview-tab').classList.add('tab-selected');
        } else {
            document.getElementById('reviews-tab').classList.add('tab-selected');
        }
        el.scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    }

    deleteFav(id) {
        return (e) => {
            e.preventDefault();
            this.props.deleteFav(id);
        };
    }

    createFav(id) {
        return (e) => {
            e.preventDefault();
            this.props.createFav(id);
        };
    }

    checkFav(){

        if (!this.props.currentUserId) { return <div className="unsave-res" onClick={() => this.props.openModal('signin')}><i className="fas fa-bookmark"></i>Sign in to save</div>}

        const { restaurant } = this.props;

        if (restaurant.userSaved) {
            return (
            <div className="unsave-res" onClick={this.deleteFav(restaurant.id)}><i className="fas fa-bookmark"></i>Unsave this restaurant</div>
            )
        } else {
            return (
            <div className="save-res" onClick={this.createFav(restaurant.id)}><i className="far fa-bookmark"></i>Save this restaurant</div>
            )
        }
    }

    render(){
        if (this.props.restaurant === undefined) {
            return(<div></div>);
        }

        const { name, address, location, phone_number, cuisine, menu, hours, 
            dress_code, exec_chef, description } = this.props.restaurant;

        const style = {
            backgroundImage: 'url(' + this.props.restaurant.photo + ')',
        };

        return(
            <>
                {this.checkFav()}
                <div className="rest-banner" style={style}></div>
                <div className="rest-show">
                <div className="rest-main">
                    <div className="show-tab">
                        <span id="overview-tab" className="tab-selected" onClick={()=>this.scrollTo(this.overviewSection)}>Overview</span>
                        <span id="reviews-tab" onClick={()=>this.scrollTo(this.reviewSection)}>Reviews</span>
                    </div>
                    <span className="show-item-name" ref={el => this.overviewSection = el}>{name}</span>
                    <span className="show-item-desc">{description}</span>
                    <span className="show-item-menu"><a href={menu} target="_blank">View menu on restaurant's website</a></span>
                        <div className="revs-container" ref={el => this.reviewSection = el}>
                        <ReviewIndex reviews={this.props.reviews} users={this.props.users} reservations={this.props.reservations}/>
                    </div>
                </div>

                <div className="rest-details">
                    <ReservationContainer />
                    <Map />
                    <span className="show-item-address">
                        <i className="fas fa-map-marker-alt"></i>{address}
                    </span>
                    <span className="show-item-location">
                        <i className="fas fa-city"></i>City
                        <p>{ location }</p>
                    </span>
                    <span className="show-item-hours">
                        <i className="far fa-clock"></i>Hours of operation
                        <p>{ hours }</p>
                    </span>
                    <span className="show-item-cuisine">
                        <i className="fas fa-utensils"></i>Cuisine
                        <p>{ cuisine }</p>
                    </span>
                    <span className="show-item-dress">
                        <i className="fas fa-tshirt"></i>Dress code
                        <p>{ dress_code }</p>
                    </span>
                    <span className="show-item-chef">
                        <i className="fas fa-user-ninja"></i>Executive chef
                        <p>{ exec_chef }</p>
                    </span>
                    <span className="show-item-phone">
                        <i className="fas fa-phone"></i>Phone number
                        <p>{ phone_number }</p>
                    </span>
                </div>
            </div>
            </>
        )
    }
}

export default withRouter(Restaurant);