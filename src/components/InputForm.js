// InputForm.js

import React, { Component } from "react";
import InputCategory from "./InputCategory";

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const formCategories = [];
    this.props.inputs.forEach((input) => {
      formCategories.push(
        <InputCategory category={input.category} fields={input.fields} />
      );
    });
    return (
      <form>
        {formCategories}
        {/* submit button */}
      </form>
    );
  }
}

export default InputForm;
