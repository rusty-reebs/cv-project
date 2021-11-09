// InputField.js

import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.inputfield}</h3>
        <input type="text" />
      </div>
    );
  }
}

export default InputField;
