import React, { Component } from "react";

import { Button } from "react-bootstrap";

class BuilderTooltip extends Component {
  render() {
    return (
      <div className={this.props.builder ? "builder-tooltip" : null}>
        <Button variant="primary">Edit</Button>
        <Button variant="primary">Remove</Button>
      </div>
    );
  }
}

export default BuilderTooltip;
