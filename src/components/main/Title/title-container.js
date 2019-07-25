import React, { Component } from "react";

import BuilderLayout from "../BuilderLayout";

import { connect } from "react-redux";

const Title = ({ PageConfig }) => {
  return (
    <BuilderLayout builder={true} typeComponent={"Title"}>
      <h1 style={{ fontSize: "7.5rem" }}>{PageConfig.title}</h1>
    </BuilderLayout>
  );
};

export default connect(state => ({ PageConfig: state.PageConfig }))(Title);
