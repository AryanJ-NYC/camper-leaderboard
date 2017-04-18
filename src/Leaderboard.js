import React, { Component } from 'react';
import CamperRow from './CamperRow';

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = { campers: [] };
  }

  componentDidMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(response => response.json())
    .then(campers => {
      this.setState({ campers: campers });
    });
  }

  render() {
    const tableStyle = {
      backgroundColor: 'darkgreen',
      color: 'white',
      width: '50%',
      margin: 'auto'
    };

    const borderStyle = {
      border: '1px white solid'
    };

    return (
      <div className="container">
        <h1 className="text-center">freeCodeCamp Leaderboard</h1>
        <table style={Object.assign(tableStyle, borderStyle)}>
          <thead>
            <tr>
              <th style={borderStyle} className="text-center">Rank</th>
              <th style={borderStyle} className="text-center">Camper Name</th>
              <th style={borderStyle} className="text-center">Points in past 30 days</th>
              <th style={borderStyle} className="text-center">All time points</th>
            </tr>
          </thead>
          <tbody>
            {this.state.campers.map((camper, rank) => {
              const { username, img, recent, alltime } = camper;
              return (
                <CamperRow
                  key={rank.toString()}
                  rank={rank}
                  username={username}
                  img={img}
                  recent={recent}
                  alltime={alltime} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;
