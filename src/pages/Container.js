import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Header from '../components/Header.js';
class Container extends Component {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default hot(module)(Container);
