import React, { Component } from 'react';

class CamperRow extends Component {
  render() {
    const tableStyle = {
      border: '1px white solid'
    };

    const usernameStyle = {
      color: 'white',
      textDecoration: 'underline'
    };

    const username = this.props.username;
    const userProfileUrl = `https://www.freecodecamp.com/${username}`;

    return (
      <tr style={tableStyle}>
        <td style={tableStyle}>{this.props.rank+1}</td>
        <td style={tableStyle}>
          <a style={usernameStyle} href={userProfileUrl} target="_blank">{username}</a>
        </td>
        <td style={tableStyle}>{this.props.recent}</td>
        <td style={tableStyle}>{this.props.alltime}</td>
      </tr>
    );
  }
}

export default CamperRow;
