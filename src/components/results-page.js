import React from 'react';
import {connect} from 'react-redux';
import {fetchMostPopPlace} from '../actions/session-actions';
import './results-page.css';
import './background-image.css';
import Hamburger from '../images/hamburger.png';
import Sub from '../images/sub.png';
import Sandwich from '../images/sandwich.png';
import Soda from '../images/soda.png';
import Coffee from '../images/soda.png';
import Pancakes from '../images/pancakes.png';
import IceCream from '../images/ice-cream.png';
import Egg from '../images/egg.png';
import Drumstick from '../images/drumstick.png';
import Fries from '../images/fries.png';

export class ResultsPage extends React.Component {

  componentDidMount() {
    console.log('RESULTS-PAGE componentDidMount');
    const sessionId = this.props.match.params.sessionId;
    const userLocation = this.props.userLocation;
    this.props.dispatch(fetchMostPopPlace(sessionId, userLocation));
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

          <img className="burger-art" src={Hamburger} alt='Hamburger clip art'/>
          <img className="sub-art"src={Sub} alt='Submarine Sandwich clip art'/>
          <img className="sandwich-art" src={Sandwich} alt='Triangle Sandwich clip art'/>
          <img className="drink-art" src={Soda} alt='Soft Drink In A Cup clip art'/>
          <img className="coffee-art" src={Coffee} alt='Coffee clip art'/>
          <img className="pancake-art" src={Pancakes} alt='Pancakeclip art'/>
          <img className="ice-cream-art" src={IceCream} alt='Ice Cream Cone clip art'/>
          <img className="egg-art" src={Egg} alt='Egg clip art'/>
          <img className="drumstick-art" src={Drumstick} alt='Chicken Leg clip art'/>
          <img className="fries-art" src={Fries} alt='French Fries clip art'/>

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