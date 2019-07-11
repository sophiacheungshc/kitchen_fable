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
                    <div className="area-name ny" onClick={() => this.searchFeatured('new york')}>New York Area</div>
                    <div className="area-name chic" onClick={() => this.searchFeatured('chicago')}>Chicago</div>
                    <div className="area-name la" onClick={() => this.searchFeatured('los angeles')}>Los Angeles</div>
                    <div className="area-name sf" onClick={() => this.searchFeatured('san francisco')}>San Francisco</div>
                    <div className="area-name sd" onClick={() => this.searchFeatured('san diego')}>San Diego</div>
                    <div className="area-name lv" onClick={() => this.searchFeatured('las vegas')}>Las Vegas</div>
                </div>
            </>
        );
    }

};


export default withRouter(connect(null, mDP)(Home));
