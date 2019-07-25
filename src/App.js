import React from "react";
import "./App.css";

// Header
import Header from "./components/header";

// Main
import Main from "./components/main";

//Footer
import Footer from "./components/footer";

import { Provider } from "react-redux";

import store from "./store";

import { Row, Col } from "react-bootstrap";

var FooterConfig = {
  isShow: true
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Row
            style={{
              backgroundColor: "#f7f9fa",
              width: "50vw",
              height: "50vh"
            }}
          >
            <Col xs={6} sm={6} md={6} lg={6}>
              <Row style={{ position: "relative", top: "25px" }}>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  style={{ fontSize: "1.3rem" }}
                >
                  Let's Build Your Website!
                </Col>
              </Row>
              <Row style={{ position: "relative", top: "25px" }}>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  style={{ fontSize: "1.0rem" }}
                >
                  You do the talking and we'll do the designing
                </Col>
              </Row>
              <Row style={{ position: "relative", top: "25px" }}>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <hr />
                </Col>
              </Row>
              <Row style={{ position: "relative", top: "25px" }}>
                <Col xs={6} sm={6} md={6} lg={6}>
                  Name or Logo
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  Plug With Us
                </Col>
              </Row>
              <Row style={{ position: "relative", top: "25px" }}>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <hr />
                </Col>
              </Row>
              <Row style={{ position: "relative", top: "25px" }}>
                <Col xs={6} sm={6} md={6} lg={6}>
                  Heading
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  gfshjkzxlfs fsahjkd fdsfsdfkhs jkd hfdkj
                </Col>
              </Row>
              <Row style={{ position: "relative", top: "25px" }}>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <hr />
                </Col>
              </Row>
              <Row style={{ position: "relative", top: "25px" }}>
                <Col xs={6} sm={6} md={6} lg={6}>
                  Subheading
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  kmmf sjdf sdfhzd
                </Col>
              </Row>
              <Row style={{ position: "relative", top: "25px" }}>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <hr />
                </Col>
              </Row>
              <Row style={{ position: "relative", top: "25px" }}>
                <Col xs={6} sm={6} md={6} lg={6}>
                  Visuals
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  sfnjs,mdfksnkdf
                </Col>
              </Row>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Row
                style={{
                  position: "relative",
                  top: "25px",
                  backgroundColor: "gray",
                  width: "28vw",
                  height: "26vh"
                }}
              >
                <Col xs={12} sm={12} md={12} lg={12}>
                  A
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/*<Header />
        <Main />
        <Footer />*/}
      </Provider>
    </div>
  );
}

export default App;
