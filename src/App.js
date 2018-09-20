import React, { Component } from 'react';
import logo from './img/Walmart_logo.svg';
import './App.css';
import Page from './components/Page.component.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">REST Server Example</h1>
        </div>

        <h5 className="App-Explanation">
          Walmart Item Challenge: Check to see which products contain the keywords that you enter
        </h5>

        <Page/>
      </div>
    );
  }
}

export default App;
