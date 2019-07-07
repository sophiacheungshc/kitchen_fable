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

    componentDidMount(){
        this.setState({keyword: ''})
    }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        //check for empty strings
        if (!this.state.keyword || !this.state.keyword.trim()) {
            this.props.history.push('/restaurants');
        } else {
            this.props.searchRestaurants(this.state.keyword)
                .then(() => this.setState({keyword: ''}))
                .then(() => this.props.history.push("/restaurants"));
        }
    }

    render(){
        return (
            <div className="search-container">
                <span className="search-info"></span>
                <span className="search-type">
                    <input type="text" onChange={this.update('keyword')} placeholder="Search by restaurant name, location, or cuisine..." />
                    </span>
                <span className="search-submit" onClick={this.handleSubmit}>Let's go</span>
            </div>
        )
    }
}


export default withRouter(Search);
