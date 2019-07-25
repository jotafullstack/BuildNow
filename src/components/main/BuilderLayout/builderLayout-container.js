import React, { Component } from "react";

import BuilderTooltip from "../BuilderTooltip";

import { Row, Col } from "react-bootstrap";

class BuilderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { over: false };
  }

  mouseOver() {
    this.setState({ over: true });
  }

  mouseOut() {
    this.setState({ over: false });
  }

  render() {
    return (
      <Row
        className={
          this.state.over && this.props.builder ? "Builder-Hoverable" : null
        }
        onMouseLeave={() => this.mouseOut()}
        onMouseEnter={() => this.mouseOver()}
      >
        <Col xs={12} sm={12} md={12} lg={12}>
          {this.props.children}
          {this.state.over && this.props.builder ? <BuilderTooltip /> : null}
        </Col>
      </Row>
    );
  }
}

export default BuilderLayout;
