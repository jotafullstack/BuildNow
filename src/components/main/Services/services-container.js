import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import BuilderLayout from "../BuilderLayout";

class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BuilderLayout builder={this.props.builder}>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4}>
            Serviço 1
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            Serviço 2
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            Serviço 3
          </Col>
        </Row>
      </BuilderLayout>
    );
  }
}

export default Services;
