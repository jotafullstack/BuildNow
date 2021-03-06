import "./footer.css";

import { connect } from "react-redux";

import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer color="blue" className="font-small pt-4 mt-4">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.plugwithus.com"> Plug With Us </a>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default connect(state => ({ FooterConfig: state.FooterConfig }))(Footer);
