import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import Container from './pages/Container';

const render = () => {
  ReactDOM.render(<Container />, document.getElementById('root'));
};
render();
if (module.hot) {
  module.hot.accept('./pages/Container', () => {
    Container.default;
    render();
  });
}
