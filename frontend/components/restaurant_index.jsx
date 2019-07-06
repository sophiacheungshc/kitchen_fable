import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllRestaurants();
    }

    render(){
        let restaurants;
        if (this.props.restaurants) {
            restaurants = this.props.restaurants.map(rest => (
                <RestaurantIndexItem restaurant={rest} key={rest.id} />
            ));
        }
        return(
            <div className="rest-index-container">
                {restaurants}
            </div>
        )
    }
}

export default RestaurantIndex;