import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import BuilderTooltip from "../BuilderTooltip";

class SubTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { over: false };
  }

  mouseOver() {
    console.log("Mouse over!!!");
    this.setState({ over: true });
  }

  mouseOut() {
    console.log("Mouse out!!!");
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
          <h2>{this.props.description}</h2>
          {this.state.over && this.props.builder ? <BuilderTooltip /> : null}
        </Col>
      </Row>
    );
  }
}

export default SubTitle;
