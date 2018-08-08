import React from 'react';
import {connect} from 'react-redux';
import {fetchMostPopPlace} from '../actions/session-actions';

export class ResultsPage extends React.Component {

  componentDidMount() {
    console.log('RESULTS-PAGE componentDidMount');
    const sessionId = this.props.sessionId;
    this.props.dispatch(fetchMostPopPlace(sessionId));
  }

  render() {
    

    if (this.props.popularPlace !== null) {
      const resultPlace = this.props.popularPlace.map(({popularPlace}) => (
        <div>
          {popularPlace}
        </div>
      ));
      return (
        <div className="results-page">
          <h2>The result is...</h2>
          {resultPlace}
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
    popularPlace: state.popularPlace
  };
};

export default connect(mapStateToProps)(ResultsPage);