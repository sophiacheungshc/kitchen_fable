import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

const mapOptions = {
    center: {
        lat: 37.773972,
        lng: -122.431297
    }, // San Francisco coords
    zoom: 13
};

class Map extends React.Component {
    componentDidMount() {
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
    }

    render() {
        return (
            <div className="map" id='map-container' ref="map">
                Map
      </div>
        );
    }
}

export default withRouter(Map);
