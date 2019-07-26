import { connect } from "react-redux";

import React from "react";

// Header
import Header from "../../../components/header";

// Main
import Main from "../../../components/main";

//Footer
import Footer from "../../../components/footer";

const Preview = ({ PageConfig, dispatch }) => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default connect(state => ({ PageConfig: state.PageConfig }))(Preview);
