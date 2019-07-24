import React, { Component } from "react";

import { Button } from "react-bootstrap";

class BuilderTooltip extends Component {
  render() {
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
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.1)"
        }}
      >
        <Button style={{ marginRight: "10px" }} variant="info">
          Edit
        </Button>
        <Button variant="danger">Remove</Button>
      </div>
    );
  }
}

export default BuilderTooltip;
