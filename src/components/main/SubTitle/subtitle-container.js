import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

class SubTitle extends Component {
  render() {
    return (
      <Row>
        <Col
          xs={this.props.xs}
          sm={this.props.sm}
          md={this.props.md}
          lg={this.props.lg}
        >
          <h2>{this.props.description}</h2>
        </Col>
      </Row>
    );
  }
}

export default SubTitle;
