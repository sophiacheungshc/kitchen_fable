import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';

function Carousel() { 

    return(
        <div className='carousel'>
            <h1>Find your table for any occasion</h1>
            <div className='slide1'></div>
            <div className='slide2'></div>
            <div className='slide3'></div>
            <SearchContainer />
        </div>
    );

};


export default Carousel;
