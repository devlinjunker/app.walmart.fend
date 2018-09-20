import _ from 'lodash';
import React, { Component } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

import WalmartDataservice from '../dataservices/walmart.dataservice.js';

import Spinner from './Spinner.component.js';
import ProductDisplay from './ProductDisplay.component.js'

export default class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      productIds: undefined,
      loading: false,
      error: undefined
    }

    this.requestProducts = this.requestProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async requestProducts(e) {
    e.preventDefault();

    let keywords = this.state.name;
    this.setState({ productIds: undefined, loading: true, error: undefined });
    try{
      const productIds = await WalmartDataservice.checkProducts(keywords);

      this.setState({ productIds, loading: false });
    } catch (e) {
        this.setState({ error: 'Server Error: Please Attempt Keyword Match Again', loading: false });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    let error;
    if(this.state.error) {
      error = <Alert variant="danger" dismissible>{this.state.error}</Alert>
    }

    let productDisplay;
    if (this.state.loading) {
      productDisplay = <Spinner/>;
    } else if (this.state.productIds) {
      productDisplay = <ProductDisplay products={this.state.productIds}/>;
    }

    return (
      <div className="Page">
        <Form onSubmit={this.requestProducts}>
          <Form.Group as={Row}>
            <Col sm={{ span: 8, offset: 1 }} xs="7">
              <Form.Control type='text' className="Page-Keyword-Input" placeholder='Enter Keywords'
                name="name" value={this.state.name} onChange={this.handleChange}/>
            </Col>
            <Col sm={{ span: 1, offset: 0 }} xs="3">
              <Button type="submit">Find Products</Button>
            </Col>
          </Form.Group>
        </Form>

        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            {error}
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            {productDisplay}
          </Col>
        </Row>
      </div>
    )
  }
}
