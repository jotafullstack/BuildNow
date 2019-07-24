import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import BuilderTooltip from "../BuilderTooltip";

class Title extends Component {
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
          <h1 style={{ fontSize: "7.5rem" }}>{this.props.description}</h1>
          {this.state.over && this.props.builder ? <BuilderTooltip /> : null}
        </Col>
      </Row>
    );
  }
}

export default Title;
