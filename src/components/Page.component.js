import React, { Component } from 'react';
import _ from 'lodash';

import WalmartDataservice from "../dataservices/walmart.dataservice.js";

import Spinner from './Spinner.component.js';
import ProductDisplay from './ProductDisplay.component.js'

export default class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      productIds: [],
      loading: false
    }

    this.requestProducts = this.requestProducts.bind(this);
    this.makeRequest = _.debounce(this.makeRequest.bind(this), 600);
  }

  requestProducts(e) {
    let keywords = e.target.value;
    this.setState({name: keywords});
    this.makeRequest(keywords);
  }

  makeRequest(keywords) {
    this.setState({ productIds: [], loading: true });
    WalmartDataservice.checkProducts(keywords).then((productIds) => {
      this.setState({ productIds, loading: false });
    });
  }

  render() {
    let productDisplay;

    if (this.state.loading) {
      productDisplay = <Spinner/>;
    } else if (this.state.productIds.length > 0) {
      productDisplay = <ProductDisplay products={this.state.productIds}/>;
    } else {
      productDisplay = <div></div>;
    }

    return (
      <div>
        <div className="Page-Explanation">
          Walmart Item Challenge, check to see which products contain the keywords that you enter
        </div>

        <div className="Page-Keyword-Input-Container">
          <strong>Enter Keyword(s):</strong>
          <input className="Page-Keyword-Input" value={this.state.name} onChange={this.requestProducts}/>
        </div>

        {productDisplay}
      </div>
    )
  }
}
