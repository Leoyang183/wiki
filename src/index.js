// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
// import React from "react";
// import ReactDOM from "react-dom";

// const Index = () => {
//   return <div>Hello React!</div>;
// };

// ReactDOM.render(<Index />, document.getElementById("root"));
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { hot, AppContainer } from "react-hot-loader";
import App from "./components/App";
class Test extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <AppContainer>
        <App />
      </AppContainer>
    );
  }
}
export default Test;
const render = () => {
  ReactDOM.render(<Test />, document.getElementById("root"));
};
render();
if (module.hot) {
  module.hot.accept("./components/App", () => {
    require("./components/App.js").default;
    render();
  });
}
