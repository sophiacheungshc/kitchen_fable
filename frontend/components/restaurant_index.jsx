import React from 'react';

class RestaurantIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllRestaurants();
    }

    render(){
        let restaurants = this.props.restaurants.map((rest, idx) => {
            return(<div id={idx} className="rest-index-item">{rest.name}</div>);
        })
        return(
            <div className="rest-index-container">
                {restaurants}
            </div>
        )
    }
}

export default RestaurantIndex;