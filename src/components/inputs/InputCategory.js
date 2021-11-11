// InputCategory.js

import React, { Component } from "react";
import InputField from "./InputField";

class InputCategory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const valueValues = [];
    this.props.values.forEach((field) => {
      valueValues.push(field.value);
    });

    const inputFields = [];
    this.props.fields.forEach((field, index) => {
      inputFields.push(
        <InputField
          inputlabel={field.label}
          inputname={field.name}
          inputtype={field.type}
          value={valueValues[index]}
        />
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
