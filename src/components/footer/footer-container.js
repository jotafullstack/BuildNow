import React, { Component } from "react";
import "./footer.css";

import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <footer className="">
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Footer
          </a>{" "}
        </nav>{" "}
      </footer>
    );
  }
}

export default connect(state => ({ FooterConfig: state.FooterConfig }))(Footer);
