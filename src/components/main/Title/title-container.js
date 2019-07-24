import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import BuilderTooltip from "../BuilderTooltip";

class Title extends Component {
  render() {
    return (
      {/* If Builder Mode is ON appears one border in component*/}
      <Row className={this.props.builder ? "Builder-Hoverable" : null}>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1>{this.props.description}</h1>
          {/* If Builder Mode is ON appears ToolTip*/}
          {this.props.builder ? <BuilderTooltip /> : null}
        </Col>
      </Row>
    );
  }
}

export default Title;
