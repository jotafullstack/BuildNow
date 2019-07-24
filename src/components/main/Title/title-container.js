import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import BuilderTooltip from "../BuilderTooltip";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { over: true };
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
        className={this.props.builder ? "Builder-Hoverable" : null}
        onMouseLeave={() => this.mouseOut()}
        onMouseEnter={() => this.mouseOver()}
      >
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1>{this.props.description}</h1>
          {this.state.over ? <BuilderTooltip /> : null}
        </Col>
      </Row>
    );
  }
}

export default Title;
