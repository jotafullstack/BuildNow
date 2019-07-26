import React, { Component } from "react";

import BuilderLayout from "../BuilderLayout";

import { connect } from "react-redux";

const SubTitle = ({ PageConfig }) => {
  return (
    <BuilderLayout builder={true} typeComponent={"Title"}>
      <h2 style={{ fontSize: "2.5rem" }}>{PageConfig.subHeading}</h2>
    </BuilderLayout>
  );
};

export default connect(state => ({ PageConfig: state.PageConfig }))(SubTitle);
