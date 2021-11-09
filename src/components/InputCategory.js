// InputCategory.js

import React, { Component } from "react";
import InputField from "./InputField";

class InputCategory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const inputboxes = [];
    this.props.fields.forEach((obj) => {
      inputboxes.push(
        <InputField inputfield={obj.name} inputtype={obj.type} />
      );
    });
    return (
      <div>
        <h2>{this.props.category}</h2>
        {inputboxes}
      </div>
    );
  }
}

export default InputCategory;
