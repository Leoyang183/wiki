import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import Container from './pages/Container';
class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return <Container />;
  }
}
export default Main;
const render = () => {
  ReactDOM.render(<Main />, document.getElementById('root'));
};
render();
if (module.hot) {
  module.hot.accept('./pages/Container', () => {
    Container.default;
    render();
  });
}
