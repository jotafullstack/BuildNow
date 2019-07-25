import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import BuilderLayout from "../BuilderLayout";

class Pricing extends Component {
  render() {
    return (
      <BuilderLayout builder={this.props.builder}>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4}>
          Pricing 1/ Free
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
          Pricing 2/ Pro
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
          Pricing 3/ Premium
          </Col>
        </Row>
      </BuilderLayout>
    );
  }
}

export default Pricing;
