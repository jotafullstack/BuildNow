import React, { Component } from "react";
import "./main.css";

import { Container } from "react-bootstrap";

/* Title Component */
import Title from "./Title";

/* Subtitle Component */
import SubTitle from "./SubTitle";

/* Services Component */
import Services from "./Services";

/* Pricing Component */
import Pricing from "./Pricing";


class Main extends Component {
  /* Construtor for getting props and setting states */
  constructor(props) {
    super(props);
    this.state = {
      // For Show or Hide Component
      isShow: this.props.isShow,
      // Allow the Container to fill all of it's availble horizontal space.
      fluid: this.props.fluid,
      // For Show or Hide Title Component
      titleShow: this.props.titleShow,
      // For Show or Hide SubTitle Component
      subTitleShow: this.props.subTitleShow
    };
  }

  //  <Image src="holder.js/100px250" fluid />

  /* Render Component */
  render() {
    return (
      <Container fluid={this.state.fluid}>
        {this.state.titleShow ? (
          <Title
            builder={this.props.builder}
            description={this.props.title.description}
          />
        ) : null}
        {this.state.subTitleShow ? (
          <SubTitle
            builder={this.props.builder}
            description={this.props.subTitle.description}
          />
        ) : null}
        <Services builder={this.props.builder} />
        <Pricing builder={this.props.builder} />
      </Container>
    );
  }
}

export default Main;
