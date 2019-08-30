import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: this.props.location.search.slice(8).split('%20').join(' ')
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.history.push({
                pathname: '/restaurants',
                search: `?search=${this.state.keyword}`
        });
    }

    // checkSuggestions(){
    //     this.props.searchRestaurants(this.state.keyword)
    //         .then(() => this.props.history.push({
    //             pathname: '/restaurants',
    //             search: `?search=${this.state.keyword}`
    //         }))
    // }

    // debounceEvent(callback, time) {
    //     let interval;
    //     return (...args) => {
    //         clearTimeout(interval);
    //         interval = setTimeout(() => {
    //             interval = null;
    //             callback(...args);
    //         }, time);
    //     };
    // };


    render(){
        if (this.props.location.pathname === '/') {
            return (
                <form className="search-container" onSubmit={this.handleSubmit} method="GET">
          
                    <span className="search-type">
                        <div className="search-icon"></div>
                        <input type="text" onChange={this.update('keyword')} placeholder="Location, Restaurant, or Cuisine" />
                    </span>
                    <button type="submit "className="search-submit">Let's go</button>
                </form>
            );
        } else {
            return (
                <div className="index-search-bar">
                    <form className="index-search-container" onSubmit={this.handleSubmit} method="GET">
                   
                        <span className="search-type">
                            <div className="search-icon"></div>
                            <input type="text" value={this.state.keyword} onChange={this.update('keyword')} placeholder="Location, Restaurant, or Cuisine" />
                            {/* {this.checkSuggestions()} */}
                        </span>
                        <button type="submit" className="search-submit" >Find a Table</button>
                    </form>
                </div>
            );
        }
    
    }
}


export default withRouter(Search);
