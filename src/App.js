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
              width: "70vw",
              height: "70vh"
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
                  backgroundColor: "#ffffff",
                  width: "40vw",
                  height: "40vh",
                  border: "1px solid #80808042"
                }}
              >
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Row
                    style={{
                      padding: "1px 1px",
                      borderRadius: "3px 3px 0 0",
                      backgroundImage:
                        "linear-gradient(-180deg, rgb(255, 255, 255), rgb(210, 210, 210))",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left"
                    }}
                  >
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <i
                        style={{
                          display: "inline-block",
                          width: "9px",
                          height: "9px",
                          marginRight: "4px",
                          borderRadius: "50%",
                          background: "gray"
                        }}
                      ></i>
                      <i
                        style={{
                          display: "inline-block",
                          width: "9px",
                          height: "9px",
                          marginRight: "4px",
                          borderRadius: "50%",
                          background: "gray"
                        }}
                      ></i>
                      <i
                        style={{
                          display: "inline-block",
                          width: "9px",
                          height: "9px",
                          marginRight: "4px",
                          borderRadius: "50%",
                          background: "gray"
                        }}
                      ></i>
                    </Col>
                  </Row>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      height: "calc(37vh)",
                      overflow: "auto",
                      width: "100%"
                    }}
                  >
                    <Header />
                    <Main />
                    <Main />
                    <Main />
                    <Footer />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Provider>
    </div>
  );
}

export default App;
