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
    const { name, address, cuisine, image } = this.props.restaurant;
    return (
      <div className="rest-index-item">
        <img className="rest-thumb" onClick={this.handleClick} src={image} />

        <div className="index-item-info">
            <span className="index-item-name" onClick={this.handleClick}>{name}</span>
          {/* <span className="index-item-review">
            {average_rating || 'No reviews yet'}
          </span> */}
          <span className="index-item-address">{address}</span>
          <span className="index-item-cuisine">{cuisine}</span>
        </div>

      </div>
    );
  }
}

export default withRouter(RestaurantIndexItem);
