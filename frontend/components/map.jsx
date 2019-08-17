import React from 'react';
import { withRouter } from 'react-router-dom';

class Map extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        const map = this.refs.map;
        let coords = { lat: 37.7749, lng: -122.4194 };

        switch (this.props.city) {
            case 'San Diego':
                coords = { lat: 32.7157, lng: -117.1611 };
                break;
            case 'Los Angeles':
                coords = { lat: 34.0522, lng: -118.2437 };
                break;
            case 'New York':
                coords = { lat: 40.7128, lng: -74.0060 };
                break;
            case 'Chicago':
                coords = { lat: 41.8781, lng: -87.6298 };
                break;
            case 'Las Vegas':
                coords = { lat: 36.1699, lng: -115.1398 };
                break;
            default:
                break;
        }
        this.map = new google.maps.Map(map, { center: coords, zoom: 12});
    }

    render() {
        return (
            <div className="map" ref="map"></div>
        );
    }
}

export default withRouter(Map);