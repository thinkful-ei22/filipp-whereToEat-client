import React from 'react';
import {Link} from 'react-router-dom';

export default function Main(props) {
  return (
    <div className="Main-page">
      <h1 className="App-title">Where should we eat?</h1>
      <h4>Having trouble deciding where to eat with your group? Let me help!</h4>
      <p className="App-intro">
          Here's what you need to know: Clicking the button will create a unique session for you, 
          which you then can share with the rest of the people in your group.
          After that, everyone can enter a list of places where they feel like eating that day,
          and submit when they are done. When everyone is done submitting, 
          you will be given the result which is the most voted on place between all of you.
          If there is a tie, one will be picked at random out of the most popular ones.
      </p>
      
      <Link to="/session"><button type="button">Lets get started!</button></Link>
    </div>
  );
}