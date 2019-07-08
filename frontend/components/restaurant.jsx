import React from 'react';
import Map from './map'

class Restaurant extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        // if (this.props.restaurant){
        this.props.fetchRestaurant(this.props.match.params.restId);
        // } else {
        //     this.props.history.push(`/restaurants`);
        // }
        
    }
    render(){
        if (this.props.restaurant === undefined) {
            return(
                <div className="notfounderror">
                    <div>404 NOT FOUND</div>
                    <p>Oops, seems like you're trying to reach a page that doesn't exist. Please return to the home page.</p>
                </div>
            );
        }

        const { name, address, location, phone_number, cuisine, menu, hours, 
            dress_code, exec_chef, description } = this.props.restaurant;

        return(
            <>
                <div className="rest-banner"></div>
            <div className="rest-show">
                {/* <div className="rest-banner"></div> */}
                <div className="rest-main">
                    <span className="show-item-name">{name}</span>
                    <span className="show-item-desc">{description}</span>
                        <span className="show-item-menu"><a href={menu} target="_blank">Link to menu</a></span>
                </div>

                <div className="rest-details">
                    <Map />
                    <span className="show-item-location">
                        <i class="fas fa-map-marker-alt"></i>{ address }
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
                        <i class="fas fa-phone"></i>Phone number
                        <p>{ phone_number }</p>
                    </span>
                </div>
            </div>
            </>
        )
    }
}

export default Restaurant;