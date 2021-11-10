// InputCategory.js

import React, { Component } from "react";
import InputField from "./InputField";

class InputCategory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const inputFields = [];
    this.props.fields.forEach((field) => {
      inputFields.push(
        <InputField inputfield={field.name} inputtype={field.type} />
      );
    });
    return (
      <div>
        <h2>{this.props.category}</h2>
        {inputFields}
      </div>
    );
  }
}

export default InputCategory;
