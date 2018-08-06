import React from 'react';
import {connect} from 'react-redux';

export class ResultsPage extends React.Component {

  render() {
    return (
      <div className="results-page">
        <h2>And the result is...</h2>
        <h4>Nothing yet. Need to add google api and then search for most popular answer.</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places
  };
};

export default connect(mapStateToProps)(ResultsPage);