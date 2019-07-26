import { connect } from "react-redux";

import React from "react";

// Header
import Header from "../../../components/header";

// Main
import Main from "../../../components/main";

//Footer
import Footer from "../../../components/footer";

// Row, Col and Button
import { Row, Col, Button, Form } from "react-bootstrap";

function changePageConfigName(name) {
  return {
    type: "CHANGE_PAGECONFIG_NAME",
    name
  };
}

function changePageConfigHeading(heading) {
  return {
    type: "CHANGE_PAGECONFIG_HEADING",
    heading
  };
}

function changePageConfigSubHeading(subHeading) {
  return {
    type: "CHANGE_PAGECONFIG_SUBHEADING",
    subHeading
  };
}

const FirstStep = ({ PageConfig, dispatch }) => {
  return (
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
            <Col xs={12} sm={12} md={12} lg={12} style={{ fontSize: "1.3rem" }}>
              Let's Build Your Website!
            </Col>
          </Row>
          <Row style={{ position: "relative", top: "25px" }}>
            <Col xs={12} sm={12} md={12} lg={12} style={{ fontSize: "1.0rem" }}>
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
              <Form.Control
                type="text"
                placeholder={PageConfig.name}
                onChange={event =>
                  dispatch(changePageConfigName(event.target.value))
                }
              />
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
              <Form.Control
                type="text"
                placeholder={PageConfig.heading}
                onChange={event =>
                  dispatch(changePageConfigHeading(event.target.value))
                }
              />
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
              <Form.Control
                type="text"
                placeholder={PageConfig.subHeading}
                onChange={event =>
                  dispatch(changePageConfigSubHeading(event.target.value))
                }
              />
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
              top: "3vh",
              backgroundColor: "#ffffff",
              width: "40vw",
              height: "40vh",
              border: "1px solid #80808042",
              boxShadow: "10px 10px 5px -5px rgba(176,176,176,1)"
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
                <Footer />
              </div>
            </Col>
          </Row>
          <Row
            style={{
              position: "relative",
              top: "3vh",
              width: "34vw",
              height: "25vh",
              border: "1px solid gray"
            }}
          >
            <Col xs={12} sm={12} md={12} lg={12}>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  style={{ display: "flex", padding: "10px 10px 10px 10px" }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      marginRight: "10px",
                      display: "flex",
                      borderRadius: "50%",
                      cursor: "pointer",
                      width: "36px",
                      height: "36px",
                      position: "relative",
                      flexShrink: "0"
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "#353740",
                      marginRight: "10px",
                      display: "flex",
                      borderRadius: "50%",
                      cursor: "pointer",
                      width: "36px",
                      height: "36px",
                      position: "relative",
                      flexShrink: "0"
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "#3aafa2",
                      marginRight: "10px",
                      display: "flex",
                      borderRadius: "50%",
                      cursor: "pointer",
                      width: "36px",
                      height: "36px",
                      position: "relative",
                      flexShrink: "0"
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "#1b7068",
                      marginRight: "10px",
                      display: "flex",
                      borderRadius: "50%",
                      cursor: "pointer",
                      width: "36px",
                      height: "36px",
                      position: "relative",
                      flexShrink: "0"
                    }}
                  ></div>
                  <div
                    style={{
                      background: "rgba(0,0,0,.1)",
                      marginRight: "10px",
                      display: "flex",
                      borderRadius: "50%",
                      cursor: "pointer",
                      width: "36px",
                      height: "36px",
                      position: "relative",
                      flexShrink: "0"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "24px",
                        textAlign: "center",
                        lineHeight: "32px",
                        color: "#8F9496",
                        display: "block",
                        width: "100%",
                        height: "100%"
                      }}
                    >
                      +
                    </span>
                  </div>
                </Col>{" "}
              </Row>
              <Button
                variant="success"
                style={{
                  position: "absolute",
                  right: "0px",
                  bottom: "0px"
                }}
              >
                Next and Save
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default connect(state => ({ PageConfig: state.PageConfig }))(FirstStep);
