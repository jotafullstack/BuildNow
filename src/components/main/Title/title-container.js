import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

class Title extends Component {
  render() {
    return (
      <Row className={this.props.builder ? "Builder-Hoverable" : null}>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1>{this.props.description}</h1>
        </Col>
      </Row>
    );
  }
}

export default Title;
