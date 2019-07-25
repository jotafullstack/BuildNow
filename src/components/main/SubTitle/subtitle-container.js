import React, { Component } from "react";

import BuilderLayout from "../BuilderLayout";

class SubTitle extends Component {
  render() {
    return (
      <BuilderLayout builder={this.props.builder} typeComponent={"Subtitle"}>
        <h2 style={{ fontSize: "2.5rem" }}>{this.props.description}</h2>
      </BuilderLayout>
    );
  }
}

export default SubTitle;
