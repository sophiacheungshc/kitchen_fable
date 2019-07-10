import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';

function Home() { 

    return(
        <>
            <div className='carousel'>
                <h1>Find your table for any occasion</h1>
                <div className='slide1'></div>
                <div className='slide2'></div>
                <div className='slide3'></div>
                <SearchContainer />
            </div>
            <div className="featured-areas">
                <div className="ny">
                    <span className="area-name">New York Area</span>
                </div>
                <div className="chicago">
                    <span className="area-name">Chicago</span>
                </div>
                <div className="la">
                    <span className="area-name">Los Angeles</span>
                </div>
                <div className="sf">
                    <span className="area-name">San Francisco</span>
                </div>
                <div className="sd">
                    <span className="area-name">San Diego</span>
                </div>
                <div className="lv">
                    <span className="area-name">Las Vegas</span>
                </div>
            </div>
        </>
    );

};


export default Home;
