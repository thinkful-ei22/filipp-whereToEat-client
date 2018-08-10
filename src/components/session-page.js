import React from 'react';
import {connect} from 'react-redux';
import {fetchPlaces, addPlace, deletePlace} from '../actions/session-actions';
import {Link} from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import uuid4 from 'uuid/v4';

export class SessionForm extends React.Component {

  state = {
    error: false,
    userId: null
  }

  componentDidMount() {
    console.log('SESSION-PAGE componentDidMount');

    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId =  uuid4();
      localStorage.setItem('userId', userId);
    }
    console.log('userId', userId);
    this.setState({userId: userId});

    const sessionId = this.props.match.params.sessionId;
    this.props.dispatch(fetchPlaces(sessionId, userId));
  }
  onSubmit() {
    const value = this.refs.newPlace.value.toLowerCase();
    const sessionId = this.props.match.params.sessionId;
    const userId = this.state.userId;
    if (value === '') {
      this.setState({error: true});
    } else {
    this.props.dispatch(addPlace(value, sessionId, userId));
    this.refs.newPlace.value = '';}

  }
  onPlaceDelete(placeId) {
    this.props.dispatch(deletePlace(placeId));
  }

  render() {
    const addedPlaces = this.props.places.map((place) => (
      <li key={place.id} className="entered-place">
        <a>{place.place}</a>
        <button type="button" onClick={() => this.onPlaceDelete(place.id)}>X</button>
      </li>
    ));
    const url = window.location.href;
    
    return (
      <div className="session-form">
        <h4>1. Share this link with your friends!</h4>
        <CopyToClipboard text={url}>
          <button type="button">Save share link to clipboard.</button>
        </CopyToClipboard>
        <h4>2. Enter places where you feel like eating today!</h4>
        {this.state.error? 'Please enter a name': ''}
        <br/>
        <input type="text" name="place" ref="newPlace"/>
        <input type="button" value="Add to list" onClick={() => this.onSubmit()}/>
        <ul className="entered-places">
          {addedPlaces}
        </ul>
        <Link to={`/results/${this.props.match.params.sessionId}`}><button type="button">See the results!</button></Link>

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