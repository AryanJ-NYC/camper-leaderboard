import React, { Component } from 'react';
import { linkStyle } from './styles';

class CamperRow extends Component {
  render() {
    const tableStyle = {
      border: '1px white solid'
    };

    const avatarStyle = {
      height: '100px',
      width: '100px',
      display: 'inline-block'
    };

    const username = this.props.username;
    const userProfileUrl = `https://www.freecodecamp.com/${username}`;

    return (
      <tr style={tableStyle}>
        <td style={tableStyle} className="text-center">{this.props.rank+1}</td>
        <td style={tableStyle}>
          <a style={linkStyle} href={userProfileUrl} target="_blank">
            <img className="img-responsive" src={this.props.img} style={avatarStyle} alt="user-avatar" />
            <span style={{paddingLeft: '5px'}}>{username}</span>
          </a>
        </td>
        <td style={tableStyle} className="text-center">{this.props.recent}</td>
        <td style={tableStyle} className="text-center">{this.props.alltime}</td>
      </tr>
    );
  }
}

export default CamperRow;
