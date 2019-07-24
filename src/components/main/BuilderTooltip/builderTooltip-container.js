import React, { Component } from "react";

import { Button } from "react-bootstrap";

class BuilderTooltip extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          margin: "auto",
          left: "0px",
          top: "0px",
          left: "0px",
          right: "0px"
        }}
      >
        <Button variant="primary">Edit</Button>
        <Button variant="primary">Remove</Button>
      </div>
    );
  }
}

export default BuilderTooltip;
