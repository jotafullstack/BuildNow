import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import BuilderLayout from "../BuilderLayout";

class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BuilderLayout builder={this.props.builder}>
        <h1 style={{ fontSize: "7.5rem" }}>{this.props.description}</h1>
      </BuilderLayout>
    );
  }
}

export default Title;
