import React, { Component } from 'react';

class MainLayout extends Component {
  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

export default MainLayout;