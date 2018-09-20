import React, { Component } from 'react';
import logo from '../img/Walmart_Star.svg';

export default class Spinner extends Component {
  render() {
    return (
      <div className="Spinner-Container">
        <img src={logo} className="Spinner-Image" alt="logo" />
      </div>
    )
  }
}
