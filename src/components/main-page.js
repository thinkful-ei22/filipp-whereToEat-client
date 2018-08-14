import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUserLocation} from '../actions/session-actions';
import './main-page.css';
import './background-image.css';
import fullPizza from '../images/pizza-full.png';
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

export class Main extends React.Component {

  state = {
    error: false
  }

  onSubmit(event) {
    const userLocation = this.refs.newLocation.value.replace(/ /g, '_');
    const {history} = this.props; 
    if (userLocation) {
      this.setState({error: false});
        if (event) {
          if (event.which === 13) {
            this.props.dispatch(setUserLocation(userLocation));
            history.push("/session/new");
          }
      } else {
        console.log('LOCATION', userLocation);

        this.props.dispatch(setUserLocation(userLocation));
        history.push("/session/new");
      };
    } else {
      this.setState({error: true});
    }
  }

  render() {
    return (
      <div className="Main-page">
        <img className="pizza-art" src={fullPizza} alt='Pizza clip art'/>
        <h1 className="App-title">Where should we eat?</h1>
        <h4 className="App-info" >Having trouble deciding where to eat with your group? Let me help!</h4>
        <ul className="App-intro">
          <li>Enter an area of where you want to eat</li>
          <li>Share given link with your friends</li>
          <li>Everyone enters places where they feel like eating</li>
          <li>Get the most popular result!</li>
        </ul>
        <label htmlFor="user-location">In what area are you looking to eat?</label>
        <br/>
        <span>{this.state.error? 'Please enter a location' : ''}</span>
        <input onKeyUp={(event) => this.onSubmit(event)} type="text" 
        className="user-location" ref="newLocation" aria-label="Enter Location" 
        placeholder="City, State, or ZIP Code"/>
        <br/>
        <button type="button" className="get-started-button"
          onClick={() => this.onSubmit()} >Lets get started!</button>
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
    userLocation: state.userLocation
  };
};

export default withRouter(connect(mapStateToProps)(Main));