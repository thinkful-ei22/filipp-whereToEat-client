import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUserLocation} from '../actions/session-actions';

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
          Here's what you need to know: Clicking the button will create a unique session for you, 
          which you then can share with the rest of the people in your group.
          After that, everyone can enter a list of places where they feel like eating that day,
          and submit when they are done. When everyone is done submitting, 
          you will be given the result which is the most voted on place between all of you.
          If there is a tie, one will be picked at random out of the most popular ones.
        </p>
        <label htmlFor="user-location">Please enter the City and State where you want to eat.</label>
        <br/>
        <input type="text" name="user-location" ref="newLocation" />
        <Link to="/session/new"><button type="button" 
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