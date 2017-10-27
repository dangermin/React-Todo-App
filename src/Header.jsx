import React, { Component } from 'react';

class Header extends Component {
  render() {
    const style = {
      color: '#000080'
    };
    return (
      <div className='jumbotron' >
        <h1 style={ style } >Todo App</h1>
        <p style={ style } >A useful tool for tracking things that need to completed and in which precedence.</p>
      </div>
    );
  }
}

export default Header;
