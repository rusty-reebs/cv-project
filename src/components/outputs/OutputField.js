// OutputField.js

import React, { Component } from "react";

class OutputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.outputvalue}
        {this.props.testvalue}
      </div>
    );
  }
}

export default OutputField;
