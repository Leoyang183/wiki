import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import Container from 'Pages/Container';

const render = () => {
  ReactDOM.render(<Container />, document.getElementById('root'));
};
render();
if (module.hot) {
  module.hot.accept('Pages/Container', () => {
    Container.default;
    render();
  });
}
