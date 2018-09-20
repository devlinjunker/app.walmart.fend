import React, { Component } from 'react';
import { Row, Col, Card, Jumbotron } from 'react-bootstrap';

export default class ProductDisplay extends Component {

  constructor(props) {
    super(props);

    let message = 'No Products Found in IDs provided!'
    if(this.props.products.length > 1) {
      message = this.props.products.length + ' Products Found!'
    } else if(this.props.products.length == 1 ){
      message = '1 Product Found!';
    }

    this.state = {
      message
    }

    this.showProduct = this.showProduct.bind(this);
  }

  showProduct(e) {
    e.preventDefault();

    let id = e.target.getAttribute('data-product-id');

    console.log('Clicked: ' + id);

    // TODO: Get Product Information and display in modal
  }

  render() {

    let products = [];
    for(let i = 0; i < this.props.products.length; i++) {
        products.push(<Col xs="10" sm="4" className="Product-Id" key={this.props.products[i]}>
          <Card>
            <Card.Body>
              <Card.Link href="" onClick={this.showProduct} data-product-id={this.props.products[i]}>{this.props.products[i]}</Card.Link>
            </Card.Body>
          </Card>
        </Col>);
    }

    return (
      <div className="Product-Display">
        <Jumbotron>
          <Row>
            <Col xs={{ span: 10, offset: 1}}>
              <h4 className="Product-Message">{this.state.message}</h4>
            </Col>
          </Row>

          <Row className="Product-Display">
            {products}
          </Row>
        </Jumbotron>
      </div>
    )
  }
}
