import React from 'react';
import { withRouter } from 'react-router-dom';
import Search from './search';
import { connect } from 'react-redux';
import { searchRestaurants } from '../actions/restaurant_actions';
import { toast } from 'react-toastify';


const mDP = (dispatch) => ({
    searchRestaurants: keyword => dispatch(searchRestaurants(keyword))
});
const mSP = (state) => ({
    reservations: Object.values(state.entities.reservations),
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
        // if (this.props.reservations.length > 0) {
        //     this.props.reservations.forEach(res => {
        //         //date difference divided by number of millisecs = total number of days between 2 dates
        //         let dateDiff = Math.ceil(((new Date(res.date)) - (new Date())) / (1000 * 60 * 60 * 24));
        //         if (dateDiff >= 0 && dateDiff <= 5) {
        //             switch (dateDiff) {
        //                 case 0:
        //                     dateDiff = 'today';
        //                     break;
        //                 case 1:
        //                     dateDiff = 'tomorrow';
        //                     break;
        //                 default:
        //                     dateDiff = `in ${dateDiff} days`;
        //             }
        //             toast(`You have an upcoming reservation ${dateDiff}.`);
        //         }
        //     })
        // }
        return(
            <>
                <div className='carousel'>
                    <h1>Find your table for any occasion</h1>
                    <div className='slide1'></div>
                    <div className='slide2'></div>
                    <div className='slide3'></div>
                    <Search />
                </div>

                {/* <h3 className="featured-head">Top Cuisines</h3>

                <div className="accordion">
                    <ul>
                        <li>
                            <div className="caption am">American</div>
                            <a href="#" >
                                <img src='https://kitchenfable-seeds.s3-us-west-1.amazonaws.com/american.jpg' onClick={() => this.searchFeatured('american')}/></a>
                        </li>

                        <li>
                            <div className="caption">Cantonese</div>
                            <a href="#">
                                <img src='https://kitchenfable-seeds.s3-us-west-1.amazonaws.com/canto.jpg' onClick={() => this.searchFeatured('cantonese')}/></a>
                        </li>

                        <li>
                            <div className="caption">French</div>
                            <a href="#">
                                <img src='https://kitchenfable-seeds.s3-us-west-1.amazonaws.com/french.jpg' onClick={() => this.searchFeatured('french')} /></a>
                        </li>

                        <li>
                            <div className="caption">Indian</div>
                            <a href="#">
                                <img src='https://kitchenfable-seeds.s3-us-west-1.amazonaws.com/indian.jpg' onClick={() => this.searchFeatured('indian')} /></a>
                        </li>

                        <li>
                            <div className="caption">Italian</div>
                            <a href="#">
                                <img src='https://kitchenfable-seeds.s3-us-west-1.amazonaws.com/italian.jpg' onClick={() => this.searchFeatured('italian')}/></a>
                        </li>

                        <li>
                            <div className="caption">Japanese</div>
                            <a href="#">
                                <img src='https://kitchenfable-seeds.s3-us-west-1.amazonaws.com/jap.jpg' onClick={() => this.searchFeatured('japanese')}/></a>
                        </li>
                    </ul>
                </div> */}
                
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


export default withRouter(connect(mSP, mDP)(Home));
