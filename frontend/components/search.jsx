import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="search-container">
                <span className="search-info"></span>
                <span className="search-location-name"></span>
                <span className="search-submit">Let's go</span>
            </div>
        )
    }
}


export default Search;
