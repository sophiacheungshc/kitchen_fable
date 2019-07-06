import React from 'react';
import { withRouter } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
  }

  render() {
    const { name, address, cuisine } = this.props.restaurant;
    return (
      <div className="rest-index-item" onClick={this.handleClick}>
        <div className="index-item-info">
          <span className="index-item-name">{name}</span>
          {/* <span className="index-item-review">
            {average_rating || 'No reviews yet'}
          </span> */}
          <span className="index-item-address">{address}</span>
          <span className="index-item-cuisine">{cuisine}</span>
        </div>

        <div className="rest-thumb"></div>
      </div>
    );
  }
}

export default withRouter(RestaurantIndexItem);
