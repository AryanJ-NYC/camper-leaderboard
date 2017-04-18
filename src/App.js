import React, { Component } from 'react';
import Leaderboard from './Leaderboard';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
