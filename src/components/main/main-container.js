import React, { Component } from "react";
import "./main.css";

import { Container, Row, Col, Image } from "react-bootstrap";

class Title extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={12}>
          <h1>Title</h1>
        </Col>
      </Row>
    );
  }
}

class SubTitle extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={12}>
          <h2>Subtitle</h2>
        </Col>
      </Row>
    );
  }
}

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
        <Title />
        <SubTitle />
      </Container>
    );
  }
}

export default Main;
