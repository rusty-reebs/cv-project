// InputCategory.js

import React, { Component } from "react";
import InputField from "./InputField";

class InputCategory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const fields = [];
    this.props.fields.forEach((field) => {
      fields.push(<InputField inputfield={field} />);
    });
    return (
      <div>
        <h2>{this.props.category}</h2>
        {fields}
      </div>
    );
  }
}

export default InputCategory;
