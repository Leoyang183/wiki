import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
class Container extends Component {
  render() {
    return (
      <div className="">
        <Header />,
        <Footer />
      </div>
    );
  }
}

export default hot(module)(Container);
