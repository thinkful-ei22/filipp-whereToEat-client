import React from 'react';
import {connect} from 'react-redux';
import {fetchMostPopPlace} from '../actions/session-actions';

export class ResultsPage extends React.Component {

  componentDidMount() {
    console.log('RESULTS-PAGE componentDidMount');
    const sessionId = this.props.match.params.sessionId;
    const userLocation = this.props.userLocation;
    this.props.dispatch(fetchMostPopPlace(sessionId));
  }

  render() {
    
    if (this.props.popularPlace !== null) {
      const directionUrl = `https://www.yelp.com/map/${this.props.popularPlace.businesses[0].alias}`;
      return (
        <div className="results-page">
          <h2>The result is...</h2>
          <a href={this.props.popularPlace.businesses[0].url} 
            className="result-title" target="_blank"
            rel="noopener noreferrer">
            {this.props.popularPlace.businesses[0].name}</a>
          <img className="result-image" src={this.props.popularPlace.businesses[0].image_url} 
            alt="The most voted on restaurant"/>
          <ul className="restaurant-info">
            <li className="address">{this.props.popularPlace.businesses[0].location.display_address[0]} <br/>
              {this.props.popularPlace.businesses[0].location.display_address[1]}</li>
            <li className="get-directions"><a href={directionUrl} target="_blank"
              rel="noopener noreferrer">Get Directions</a></li>
            <li className="phone-number">{this.props.popularPlace.businesses[0].display_phone}</li>
            <li className="rating">Rating: {this.props.popularPlace.businesses[0].rating}</li>
          </ul>

        </div>
      );
    } else {
      return (
        <div className="results-page">
          <h2>Please wait for the results...</h2>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    places: state.places,
    sessionId: state.sessionId,
    popularPlace: state.popularPlace,
    userLocation: state.userLocation
  };
};

export default connect(mapStateToProps)(ResultsPage);