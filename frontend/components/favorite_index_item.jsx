import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFav } from '../actions/favorite_actions';

const mDP = (dispatch) => ({
    deleteFav: (id) => dispatch(deleteFav(id))
});

class FavoriteIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // this.unsave = this.unsave.bind(this);
    }

    handleClick() {
        this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
    }

    // unsave() {
    //     this.props.deleteFav(this.props.restaurant.id);
    // }

    render() {
        const { name, cuisine, location } = this.props.restaurant;

        const style = {
            
            backgroundImage: 'url(' + this.props.fav.photo + ')',
        };
        return (
            <div className="fav-item">
                <div className="fav-thumb" onClick={this.handleClick} style={style} ></div>

                <div className="fav-item-info">
                    <span className="fav-item-name" onClick={this.handleClick}>{name}</span>
                    {/* <span className="unsave-rest" onClick={this.unsave}><i className="fas fa-bookmark"></i>Remove from saved restaurants</span> */}
                    <span className="fav-location">{cuisine} | {location}</span>
                    <span className="reserve-now" onClick={this.handleClick}>Reserve Now</span>
                </div>

            </div>
        );
    }
}

export default withRouter(connect(null, mDP)(FavoriteIndexItem));
