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
            // this.props.history.push(`/restaurants`);
            return(<div>Cannot find restaurant :( Redirecting...</div>);
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
                    <span className="show-item-address">{address}</span>
                    <span className="show-item-location">{location}</span>
                    <span className="show-item-phone">{phone_number}</span>
                    <span className="show-item-cuisine">{cuisine}</span>
                    <span className="show-item-hours">{hours}</span>
                    <span className="show-item-dress">{dress_code}</span>
                    <span className="show-item-chef">{exec_chef}</span>
                </div>
            </div>
            </>
        )
    }
}

export default Restaurant;