import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     this.props.fetchAllRestaurants();
    // }

    render(){
        let restaurants;
        if (this.props.restaurants.length > 0) {
            restaurants = this.props.restaurants.map(rest => (
                <RestaurantIndexItem restaurant={rest} key={rest.id} />
            ));
        } else {
            return (
                <div className="restaurant-search-error">
                    <div>WE DID NOT FIND A MATCH FOR YOUR SEARCH.</div>
                    <p>Sorry, we couldn't find any results. Try checking your spelling or using less specific keywords.</p>
                </div>
            );
        }
        return(
            <div className="rest-index-container">
                {restaurants}
            </div>
        )
    }
}

export default RestaurantIndex;