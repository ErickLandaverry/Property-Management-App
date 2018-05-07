import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header__content">
        <h1 className="header">Header</h1>
        <h2 className="content">Property Management App</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Header;