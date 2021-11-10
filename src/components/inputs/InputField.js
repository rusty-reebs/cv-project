// InputField.js

import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* !! should be label, not h3 */}
        <h3>{this.props.inputfield}</h3>
        <input
          // onChange={this.handleChange}
          // value={this.state.name.text}
          type={this.props.inputtype}
          // id="nameinput"
        />
      </div>
    );
  }
}

export default InputField;
