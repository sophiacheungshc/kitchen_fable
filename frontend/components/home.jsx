import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchContainer from './search_container';
import { connect } from 'react-redux';
import { searchRestaurants } from '../actions/restaurant_actions';

const mDP = (dispatch) => ({
    searchRestaurants: keyword => dispatch(searchRestaurants(keyword))
});

class Home extends React.Component { 
    constructor(props){
        super(props);

        this.searchFeatured = this.searchFeatured.bind(this);
    }

    searchFeatured(keyword){
        this.props.searchRestaurants(keyword)
            .then(() => this.props.history.push({
                pathname: '/restaurants',
                search: `?search=${keyword}`
            })); 
    }

    render(){
        return(
            <>
                <div className='carousel'>
                    <h1>Find your table for any occasion</h1>
                    <div className='slide1'></div>
                    <div className='slide2'></div>
                    <div className='slide3'></div>
                    <SearchContainer />
                </div>
                <h3 className="featured-head">Featured Areas</h3>
                <div className="featured-areas">
                    <div className="ny" onClick={() => this.searchFeatured('new york')}>
                        <span className="area-name">New York Area</span>
                    </div>
                    <div className="chicago" onClick={() => this.searchFeatured('chicago')}>
                        <span className="area-name">Chicago</span>
                    </div>
                    <div className="la" onClick={() => this.searchFeatured('los angeles')}>
                        <span className="area-name">Los Angeles</span>
                    </div>
                    <div className="sf" onClick={() => this.searchFeatured('san fran')}>
                        <span className="area-name">San Francisco</span>
                    </div>
                    <div className="sd" onClick={() => this.searchFeatured('san diego')}>
                        <span className="area-name">San Diego</span>
                    </div>
                    <div className="lv" onClick={() => this.searchFeatured('las vegas')}>
                        <span className="area-name">Las Vegas</span>
                    </div>
                </div>
            </>
        );
    }

};


export default withRouter(connect(null, mDP)(Home));
