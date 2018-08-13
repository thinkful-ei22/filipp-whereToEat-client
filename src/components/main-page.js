import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUserLocation} from '../actions/session-actions';
import './main-page.css';

export class Main extends React.Component {

  state = {
    error: false
  }

  onSubmit() {
    const userLocation = this.refs.newLocation.value.replace(/ /g, '_');
    console.log('LOCATION', userLocation);

    this.props.dispatch(setUserLocation(userLocation));
  }

  render() {
    return (
      <div className="Main-page">
        <h1 className="App-title">Where should we eat?</h1>
        <h4>Having trouble deciding where to eat with your group? Let me help!</h4>
        <p className="App-intro">
          Enter the approximate location of where you plan on eating with your group
          and click the button. On the next page you can share the given link with 
          your friends, and all of you can start entering locations of where they feel
          like eating today. Once everyone has entered their choices you can click
          the submit button to see the results. You will be given a resaurant that
          received the most votes that is located near of where you selected earlier.
        </p>
        <label htmlFor="user-location">In what area are you looking to eat?</label>
        <br/>
        <input type="text" className="user-location" ref="newLocation" placeholder="City, State, or ZIP Code"/>
        <br/>
        <Link to="/session/new"><button type="button" className="get-started-button"
          onClick={() => this.onSubmit()} >Lets get started!</button></Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLocation: state.userLocation
  };
};

export default connect(mapStateToProps)(Main);