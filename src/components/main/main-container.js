import React, { Component } from "react";
import "./main.css";

import { Container, Image } from "react-bootstrap";

class Main extends Component {
  /* Construtor for getting props and setting states */
  constructor(props) {
    super(props);
    this.state = {
      // For Show or Hide Component
      isShow: this.props.isShow,
      // Allow the Container to fill all of it's availble horizontal space.
      fluid: true
    };
  }

  /* Render Component */
  render() {
    return (
      <Container fluid={this.state.fluid} style={{ backgroundColor: "red" }}>
        <Image src="holder.js/100px250" fluid />
      </Container>
    );
  }
}

export default Main;
