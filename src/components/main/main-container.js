import React, { Component } from "react";
import "./main.css";

import { Container, Row, Col, Image } from "react-bootstrap";

import Title from "./Title";
import SubTitle from "./SubTitle";

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

  //  <Image src="holder.js/100px250" fluid />

  /* Render Component */
  render() {
    return (
      <Container fluid={this.state.fluid}>
        <Title description={"Title"} xs={12} sm={12} md={12} lg={12} />
        <SubTitle description={"Subtitle"} xs={12} sm={12} md={12} lg={12} />
      </Container>
    );
  }
}

export default Main;
