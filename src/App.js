import React, { Component } from 'react';
import logo from './Walmart_logo.svg';
import './App.css';
import Page from './components/Page.component.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">REST Server Example</h1>
        </header>

        <Page/>
      </div>
    );
  }
}

export default App;
