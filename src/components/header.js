import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header__content">
        <h1 className="header">Header</h1>
        
        {this.props.children}
      </div>
    );
  }
}

export default Header;