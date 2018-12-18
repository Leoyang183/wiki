import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes from '../routes/route.js';
import Header from 'Components/Header.js';
import Footer from 'Components/Footer.js';
const Container = () => {
  return (
    <BrowserRouter basename="/">
      <div>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default hot(module)(Container);
