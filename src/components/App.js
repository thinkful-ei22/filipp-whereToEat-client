import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MainPage from './main-page';
import SessionPage from './session-page';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/session" component={SessionPage} />

        </main>
      </div>
    </Router>
  );
}
