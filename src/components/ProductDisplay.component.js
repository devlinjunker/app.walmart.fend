import React, { Component } from 'react';

export default class ProductDisplay extends Component {

  render() {
    return (
        <div>{this.props.products}</div>
    )
  }
}
