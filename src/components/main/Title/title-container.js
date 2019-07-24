import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

class Title extends Component {
  render() {
    return (
      <Row>
        <Col
          xs={this.props.xs}
          sm={this.props.sm}
          md={this.props.md}
          lg={this.props.lg}
        >
          <h1>{this.props.description}</h1>
        </Col>
      </Row>
    );
  }
}

export default Title;
