import React from 'react';
import { withRouter } from 'react-router-dom';
import { searchRestaurantNames } from '../util/restaurant_api_util';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: this.props.location.search.slice(8).split('%20').join(' '),
            suggestions: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.showSuggestions = this.showSuggestions.bind(this);
        this.debouncedSuggest = this.debouncedSuggest.bind(this);
        this.timeOut = null;
    }


    update(field) {
        return (e) => {
            document.getElementsByClassName('suggest-dropdown')[0].classList.remove('hidden');
            let query = e.target.value;
            if (query.length > 0) {
                this.setState({[field]: query}, this.debouncedSuggest);
            } else {
                this.setState({ 
                    [field]: query,
                    suggestions : []
                })
            }
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.history.push({
                pathname: '/restaurants',
                search: `?search=${this.state.keyword}`
        });
    }

    showSuggestions(){
        let suggestArr;
        //for when there are a lot of suggestions
        if (this.state.suggestions.result.length > 5) {
            suggestArr = this.state.suggestions.result.slice(0, 5);
        } else {
            suggestArr = this.state.suggestions.result;
        }
        return suggestArr.map( (name, idx) => (
            <li key={idx} onClick={() => {
                document.getElementsByClassName('suggest-dropdown')[0].classList.add('hidden');
                this.setState({ keyword: name });
            }}>{name}</li>
        ))
    }

    debouncedSuggest() {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            searchRestaurantNames(this.state.keyword)
            .then((result) => {
                this.setState({ suggestions: result })
            });
        }, 500);
    };


    render(){
        if (this.props.location.pathname === '/') {
            return (
                <form className="search-container" onSubmit={this.handleSubmit} method="GET">
          
                    <span className="search-type">
                        <div className="search-icon"></div>
                        <input type="text" onChange={this.update('keyword')} value={this.state.keyword} placeholder="Location, Restaurant, or Cuisine" />
                        <ul className="suggest-dropdown">{this.state.suggestions.result ? this.showSuggestions() : null}</ul>
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
                            <ul className="suggest-dropdown">{this.state.suggestions.result ? this.showSuggestions() : null}</ul>
                        </span>
                        <button type="submit" className="search-submit" >Find a Table</button>
                    </form>
                </div>
            );
        }
    
    }
}


export default withRouter(Search);
