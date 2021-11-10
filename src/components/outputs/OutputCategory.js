// OutputCategory.js

import React, { Component } from "react";
import OutputField from "./OutputField";

class OutputCategory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const outputFields = [];
    this.props.fields.forEach((field) => {
      outputFields.push(
        <OutputField outputfield={field.name} outputvalue={field.value} />
      );
    });
    return (
      <div>
        <h2>{this.props.category}</h2>
        {outputFields}
      </div>
    );
  }
}

export default OutputCategory;
