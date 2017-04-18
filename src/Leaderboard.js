import React, { Component } from 'react';
import CamperRow from './CamperRow';
import { linkStyle } from './styles';

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = { campers: [] };
    this.topRecentCampers = [];
    this.topAllTimeCampers = [];
  }

  componentDidMount() {
    const fccApiRoot = 'https://fcctop100.herokuapp.com/api/fccusers/top';

    fetch(`${fccApiRoot}/recent`)
    .then(response => response.json())
    .then(campers => {
      this.topRecentCampers = campers;

      const desc = true;
      this.setState({
        campers: campers,
        desc: desc
      });
    });

    fetch(`${fccApiRoot}/alltime`)
    .then(response => response.json())
    .then(campers => {
      this.topAllTimeCampers = campers;
    });
  }

  toggleSort(camperType) {
    let campers = null;

    if (camperType === 'recent') {
      campers = this.topRecentCampers;
    } else if (camperType === 'alltime') {
      campers = this.topAllTimeCampers;
    }

    // always sort in descending order if new list; toggle if same list
    const desc = (campers !== this.state.campers) ? true : !this.state.desc;
    if (desc) {
      campers.sort((a, b) => b[camperType] - a[camperType]);
    } else {
      campers.sort((a, b) => a[camperType] - b[camperType]);
    }

    this.setState({
      campers: campers,
      desc: desc
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

    const sortIconStyle = {
      paddingLeft: '2%'
    };
    let sortIcon = '';
    if (typeof this.state.desc !== 'undefined') {
      if (this.state.desc) {
        sortIcon = <i style={sortIconStyle} className="fa fa-sort-numeric-desc" aria-hidden="true"></i>;
      } else {
        sortIcon = <i style={sortIconStyle} className="fa fa-sort-numeric-asc" aria-hidden="true"></i>;
      }
    }

    return (
      <div className="container">
        <h1 className="text-center">freeCodeCamp Leaderboard</h1>
        <table style={Object.assign(tableStyle, borderStyle)}>
          <thead>
            <tr>
              <th style={borderStyle} className="text-center">Rank</th>
              <th style={borderStyle} className="text-center">Camper Name</th>
              <th style={borderStyle} className="text-center">
                <a href="#" onClick={() => this.toggleSort('recent')} style={linkStyle}>
                  Points in past 30 days
                </a>
                {(this.state.campers === this.topRecentCampers) ? sortIcon : ''}
              </th>
              <th style={borderStyle} className="text-center">
                <a href="#" onClick={() => this.toggleSort('alltime')} style={linkStyle}>
                  All time points
                </a>
                {(this.state.campers === this.topAllTimeCampers) ? sortIcon : ''}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.campers.map((camper, rank) => {
              // make sure ranks stick with campers if ascending
              if (!this.state.desc) {
                rank = this.state.campers.length - rank-1;
              }
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
