import React from 'react';
import {connect} from 'react-redux';
import {fetchPlaces, addPlace, deletePlace} from '../actions/places-Info.actions';
import {Link} from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import uuid4 from 'uuid/v4';
import './styles/session-page.css';
import './styles/background-image.css';
import PizzaNotFull from '../images/pizza-no-slice.png';
import Hamburger from '../images/hamburger.png';
import Sub from '../images/sub.png';
import Sandwich from '../images/sandwich.png';
import Soda from '../images/soda.png';
import Coffee from '../images/coffee.png';
import Pancakes from '../images/pancakes.png';
import IceCream from '../images/ice-cream.png';
import Egg from '../images/egg.png';
import Drumstick from '../images/drumstick.png';
import Fries from '../images/fries.png';

export class SessionForm extends React.Component {

  state = {
    error: false,
    userId: null
  }

  componentDidMount() {
    //console.log('SESSION-PAGE componentDidMount');

    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId =  uuid4();
      localStorage.setItem('userId', userId);
    }
    //console.log('userId', userId);
    this.setState({userId: userId});

    const sessionId = this.props.match.params.sessionId;
    this.props.dispatch(fetchPlaces(sessionId, userId));
  }
  onSubmit(event) {
    const value = this.refs.newPlace.value.toLowerCase();
    const sessionId = this.props.match.params.sessionId;
    const userId = this.state.userId;
    if (event) {
      if (event.which === 13) {
        if (value === '') {
          this.setState({error: true});
        } else {
        this.setState({error: false})
        this.props.dispatch(addPlace(value, sessionId, userId));
        this.refs.newPlace.value = '';}
      }
    } else {
      if (value === '') {
        this.setState({error: true});
      } else {
      this.setState({error: false})
      this.props.dispatch(addPlace(value, sessionId, userId));
      this.refs.newPlace.value = '';}
    }
  }
  onPlaceDelete(placeId) {
    this.props.dispatch(deletePlace(placeId));
  }

  render() {
    const addedPlaces = this.props.places.map((place) => (
      <li key={place.id} className="entered-place">
        <a className="place-name">{place.place}</a>
        <button type="button" className="remove-place-button" onClick={() => this.onPlaceDelete(place.id)}>X</button>
      </li>
    ));
    const url = window.location.href;
    
    return (
      <div className="session-form">
        <img className="pizza-art" src={PizzaNotFull} alt='Pizza clip art'/>
        <h4>1. Share this link with your friends!</h4>
        <CopyToClipboard text={url}>
          <button type="button" className="clipboard-button">Save share link to clipboard</button>
        </CopyToClipboard>
        <h4>2. Enter places where you feel like eating today!</h4>
        <span className="error" >{this.state.error? 'Please enter a name' : ''}</span>
        <input type="text" className="place" ref="newPlace" onKeyUp={(event) => this.onSubmit(event)}
         placeholder="Restaurant name" aria-label="Enter Restaurant Name"/>
        <input type="button" className="add-to-list" value="Add to list" 
          onClick={() => this.onSubmit()}/>
        <ul className="entered-places">
          {addedPlaces}
        </ul>
        <h4>3. And finally...</h4>
        <Link to={`/results/${this.props.match.params.sessionId}`}><button type="button"
        className="see-results-button">See the results!</button></Link>
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
  }
}

const mapStateToProps = state => {
  return {
    places: state.placesInfo.places,
    sessionId: state.sessionInfo.sessionId
  };
};

export default connect(mapStateToProps)(SessionForm);