import React, { Component } from "react";

import BuilderLayout from "../BuilderLayout";

import { connect } from "react-redux";

class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BuilderLayout builder={this.props.builder} typeComponent={"Title"}>
        <h1 style={{ fontSize: "7.5rem" }}>{this.props.description}</h1>
      </BuilderLayout>
    );
  }
}

export default connect(state => ({ title: state }))(Title);
