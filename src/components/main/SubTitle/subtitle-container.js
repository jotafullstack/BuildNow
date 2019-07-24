import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

class SubTitle extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h2>{this.props.description}</h2>
        </Col>
      </Row>
    );
  }
}

export default SubTitle;
