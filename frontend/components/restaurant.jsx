import React from 'react';

class Restaurant extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        if (this.props.restaurant){
            this.props.fetchRestaurant(this.props.restaurant.id);
        } else {
            this.props.history.push(`/restaurants`);
        }
        
    }
    render(){
        if (this.props.restaurant === undefined) {
            this.props.history.push(`/restaurants`);
            return(<div>Cannot find restaurant :( Redirecting...</div>)
        }

        const { name, address, location, phone_number, cuisine, menu, hours, 
            dress_code, exec_chef, description } = this.props.restaurant;

        return(
            <div className="rest-show">
                <span className="index-item-name">{name}</span>
                <span className="index-item-address">{address}</span>
                <span className="index-item-location">{location}</span>
                <span className="index-item-phone">{phone_number}</span>
                <span className="index-item-cuisine">{cuisine}</span>
                <span className="index-item-menu">{menu}</span>
                <span className="index-item-hours">{hours}</span>
                <span className="index-item-dress">{dress_code}</span>
                <span className="index-item-chef">{exec_chef}</span>
                <span className="index-item-desc">{description}</span>
            </div>
        )
    }
}

export default Restaurant;