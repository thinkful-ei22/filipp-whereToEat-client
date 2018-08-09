import React from 'react';
import {connect} from 'react-redux';
import {fetchPlaces, addPlace, deletePlace} from '../actions/session-actions';
import {Link} from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export class SessionForm extends React.Component {
  componentDidMount() {
    const sessionId = this.props.match.params.sessionId;
    console.log('SESSION-PAGE componentDidMount');
    this.props.dispatch(fetchPlaces(sessionId));
  }
  onSubmit() {
    const value = this.refs.newPlace.value.toLowerCase();
    const sessionId = this.props.match.params.sessionId;
    console.log('SESSION ID', sessionId);
    console.log('is this thing on');
    this.props.dispatch(addPlace(value, sessionId));
    this.refs.newPlace.value = '';

  }
  onPlaceDelete(placeId) {
    console.log('PLACEID', placeId);
    this.props.dispatch(deletePlace(placeId));
  }

  render() {
    console.log('places', this.props.places);
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