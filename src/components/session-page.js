import React from 'react';
import {connect} from 'react-redux';
import {fetchPlaces, addPlace} from '../actions/session-actions';
import {Link} from 'react-router-dom';

export class SessionForm extends React.Component {
  componentDidMount() {
    const sessionId = this.props.sessionId;
    console.log('SESSION-PAGE componentDidMount');
    this.props.dispatch(fetchPlaces(sessionId));
  }
  onSubmit() {
    const value = this.refs.newPlace.value;
    const sessionId = this.props.sessionId;
    console.log('SESSION ID', sessionId);
    this.props.dispatch(addPlace(value, sessionId));
    this.refs.newPlace.value = '';

  }

  render() {
    const addedPlaces = this.props.places.map(({place}, index) => (
      <li key={index}>
        {place}
      </li>
    ));
    return (
      <div className="session-form">
        <h4>1. Share this link with your friends!</h4>
        <button type="button">Save share link to clipboard.</button>
        <h4>2. Enter places where you feel like eating today!</h4>
        <input type="text" name="place" ref="newPlace"/>
        <input type="button" value="Add to list" onClick={() => this.onSubmit()}/>
        <ul>
          {addedPlaces}
        </ul>
        <Link to={`/results/${this.props.sessionId}`}><button type="button">See the results!</button></Link>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places,
    sessionId: state.sessionId
  };
};

export default connect(mapStateToProps)(SessionForm);