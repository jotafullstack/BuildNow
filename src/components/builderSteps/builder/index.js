import { connect } from "react-redux";

import React from "react";

import FirstStep from "../firstStep";

import Preview from "../preview";

const Builder = ({ PreviewConfig, PageConfig, dispatch }) => {
  return <div>{PreviewConfig.fullPreview ? <Preview /> : <FirstStep />}</div>;
};

export default connect(state => ({
  PreviewConfig: state.PreviewConfig,
  PageConfig: state.PageConfig
}))(Builder);
