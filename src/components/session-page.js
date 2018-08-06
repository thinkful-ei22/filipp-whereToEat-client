import React from 'react';
import {connect} from 'react-redux';


export class SessionForm extends React.component {

  render() {
    const addedPlaces = this.props.places.map(place => (
      <li>
        {place}
      </li>
    ));
    return (
      <div className="session-form">
        <h4>1. Share this link with your friends!</h4>
        <button type="button">Save share link to clipboard.</button>
        <h4>2. Enter places where you feel like eating today!</h4>
        <form>
          <input type="text" name="place"/>
          <input type="submit" value="Add to list"/>
        </form>
        <ul>
          {addedPlaces}
        </ul>
        <button type="button">Submit your choices.</button>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places
  };
};

export default connect(mapStateToProps)(SessionForm);