import React from 'react';
import {connect} from 'react-redux';
import {createSession} from '../actions/session-Info.actions';
import {Redirect} from 'react-router-dom';

export class SessionCreator extends React.Component {
  
  componentDidMount() {
    const userLocation = this.props.userLocation;
    //console.log('Location in new place', userLocation);
    this.props.dispatch(createSession((userLocation)));
  }

  render() {
    if (this.props.sessionId !== null) {
      return (
        <Redirect exact from="/session/new" to={`/session/${this.props.sessionId}/${this.props.userLocation}`} />
      );
    } else {
      return (
        <h2>Creating session, please wait...</h2>
      );
    }
    
  }

}

const mapStateToProps = state => {
  return {
    sessionId: state.sessionInfo.sessionId,
    userLocation: state.sessionInfo.userLocation
  };
};

export default connect(mapStateToProps)(SessionCreator);