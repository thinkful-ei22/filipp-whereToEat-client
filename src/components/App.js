import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MainPage from './main-page';
import SessionPage from './session-page';
import Results from './results-page';
import NewSession from './new-session';
import './App.css';
import {connect} from 'react-redux';


export class App extends React.Component {
  componentDidMount() {
    console.log('App did mount');
  }
  render() {
    return (
      <Router>
        <div className="App">
          <main>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/session/new" component={NewSession} />
              <Route exact path="/session/:sessionId" component={SessionPage} />
              <Route exact path="/results/:sessionId" component={Results} />
            </Switch>

          </main>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
