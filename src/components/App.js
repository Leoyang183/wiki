import React, { Component } from "react";
import { hot } from "react-hot-loader";
// import logo from "../logo.svg";
// import "../App.css";

class App extends Component {
  render() {
    console.log(123123);
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 123123
          </a>
        </header>
        <div> 123</div>
      </div>
    );
  }
}

// export default hot(module)(App);

export default App;
