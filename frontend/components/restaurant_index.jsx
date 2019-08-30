import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import SearchContainer from './search_container';
import LoadingIcon from './loading';


class RestaurantIndex extends React.Component {
    constructor(props){
        super(props);

        this.restaurant_index = this.restaurant_index.bind(this);
    }

    componentWillMount(){
        document.getElementsByClassName('navbar')[0].scrollIntoView();
        this.props.searchRestaurants(this.props.location.search.slice(8).split('%20').join(' '));
    }

    restaurant_index(){
        if (this.props.loading) {
            return <LoadingIcon />
        } else if (this.props.restaurants.length === 0) {
            return (
                <div className="restaurant-search-error">
                    <div>WE DID NOT FIND A MATCH FOR YOUR SEARCH</div>
                    <p>Sorry, we couldn't find any results. Try checking your spelling or using less specific keywords.</p>
                </div>
            );

        } else {
            return this.props.restaurants.map((rest, idx) => (
                
                <RestaurantIndexItem restaurant={rest} key={idx} />
            ));
        }
    }
    render(){
        return(
            <>
                <SearchContainer />
                <div className="rest-index-container">
                    {/* <div className="searched-for">You searched for "{this.props.location.search.slice(8)}"</div> */}
                    {this.restaurant_index()}
                </div>
            </>
        )
    }
}

export default RestaurantIndex;