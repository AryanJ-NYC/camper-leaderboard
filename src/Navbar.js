import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" style={{backgroundColor: "darkgreen" }}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#" style={{ marginBottom: "4%" }} >
              <img
                style={{ width: "100%" }}
                className="img-responsive"
                alt="Free Code Camp"
                src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
