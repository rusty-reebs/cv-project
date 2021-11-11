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
        <label>{this.props.inputlabel}</label>
        <input
          // onChange={this.handleChange}
          name={this.props.inputname}
          type={this.props.inputtype}
          value={this.props.value}
          // id="nameinput"
        />
      </div>
    );
  }
}

export default InputField;
