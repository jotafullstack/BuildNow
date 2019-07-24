import React, { Component } from "react";
import "./main.css";

import { Container } from "react-bootstrap";

class Main extends Component {
  /* Construtor for getting props and setting states */
  constructor(props) {
    super(props);
    /* For Show or Hide Component */
    this.state = {
      isShow: this.props.isShow
    };
  }

  /* Render Component */
  render() {
    return <Container>sfdfs</Container>;
  }
}

export default Main;
