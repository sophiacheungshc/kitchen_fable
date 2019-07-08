import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: ''
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
        //check for empty strings
        // if (this.state.keyword.length === 0 || this.state.keyword.trim().length === 0) {
        //     this.props.history.push('/restaurants');
        // }
        this.props.searchRestaurants(this.state.keyword)
            // .then(() => this.setState({ keyword: '' }))
            .then(() => this.props.history.push("/restaurants"));

    }

    render(){
        if (this.props.location.pathname === '/') {
            return (
                <form className="search-container" onSubmit={this.handleSubmit}>
                    <span className="search-info"></span>
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
                    <form className="index-search-container" onSubmit={this.handleSubmit}>
                        <span className="search-info"></span>
                        <span className="search-type">
                            <div className="search-icon"></div>
                            <input type="text" onChange={this.update('keyword')} placeholder="Location, Restaurant, or Cuisine" />
                        </span>
                        <button type="submit" className="search-submit" >Find a Table</button>
                    </form>
                </div>
            );
        }
    
    }
}


export default withRouter(Search);
