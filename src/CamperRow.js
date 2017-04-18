import React, { Component } from 'react';

class CamperRow extends Component {
  render() {
    const style = {
      border: '1px white solid'
    };

    return (
      <tr style={style}>
        <td style={style}>{this.props.rank+1}</td>
        <td style={style}>{this.props.username}</td>
        <td style={style}>{this.props.recent}</td>
        <td style={style}>{this.props.alltime}</td>
      </tr>
    );
  }
}

export default CamperRow;
