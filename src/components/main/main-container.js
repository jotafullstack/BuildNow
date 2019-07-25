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

import { connect } from "react-redux";

class Main extends Component {
  /* Construtor for getting props and setting states */
  constructor(props) {
    super(props);
  }

  //  <Image src="holder.js/100px250" fluid />

  /* Render Component */
  render() {
    return (
      <Container fluid={this.props.MainConfig.fluid}>
        {this.props.MainConfig.titleShow ? (
          <Title
            builder={this.props.MainConfig.builder}
            description={this.props.MainConfig.title.description}
          />
        ) : null}
        {this.props.MainConfig.subTitleShow ? (
          <SubTitle
            builder={this.props.MainConfig.builder}
            description={this.props.MainConfig.subTitle.description}
          />
        ) : null}
        <Services builder={this.props.MainConfig.builder} />
        <Pricing builder={this.props.MainConfig.builder} />
      </Container>
    );
  }
}
export default connect(state => ({ MainConfig: state.MainConfig }))(Main);
