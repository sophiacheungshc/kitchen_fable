import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
    constructor(props){
        super(props);

        this.restaurants_list = this.restaurants_list.bind(this);
    }

    // componentDidMount(){
    //     this.props.fetchAllRestaurants();
    // }

    restaurants_list(){
        if (this.props.restaurants.length === 0) {
            return (
                <div className="restaurant-search-error">
                    <div>WE DID NOT FIND A MATCH FOR YOUR SEARCH.</div>
                    <p>Sorry, we couldn't find any results. Try checking your spelling or using less specific keywords.</p>
                </div>
            );

        } else {
            return this.props.restaurants.map(rest => (
                <RestaurantIndexItem restaurant={rest} key={rest.id} />
            ));
        }
    }
    render(){
        return(
            <div className="rest-index-container">
                {this.restaurants_list()}
            </div>
        )
    }
}

export default RestaurantIndex;