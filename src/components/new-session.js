import React from 'react';
import {connect} from 'react-redux';
import {createSession} from '../actions/session-actions';
import {Redirect} from 'react-router-dom';

export class SessionCreator extends React.Component {
  componentDidMount() {
    console.log('session id', this.props.sessionId);
    this.props.dispatch(createSession());
    console.log('session id after', this.props.sessionId);
  }

  render() {
    if (this.props.sessionId !== null) {
      return (
        <Redirect exact from="/session/new" to={`/session/${this.props.sessionId}`} />
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
    sessionId: state.sessionId
  };
};

export default connect(mapStateToProps)(SessionCreator);