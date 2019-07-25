import React, { Component } from "react";

import BuilderLayout from "../BuilderLayout";

class Title extends Component {
  render() {
    return (
      <BuilderLayout builder={this.props.builder} typeComponent={"Title"}>
        <h1 style={{ fontSize: "7.5rem" }}>{this.props.description}</h1>
      </BuilderLayout>
    );
  }
}

export default Title;
