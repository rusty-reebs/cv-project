// InputForm.js

import React, { Component } from "react";
import InputCategory from "./InputCategory";

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  handleValueChange = (e) => {
    this.props.onValueChange(e.target.value);
  };

  // onSubmitForm = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     outputData: this.state.outputData.concat(this.state.name),
  //     name: {
  //       text: "",
  //     },
  //   });
  // };

  render() {
    const valueFields = [];
    this.props.values.forEach((value) => {
      valueFields.push(value.fields);
    });
    const formCategories = [];
    this.props.inputs.forEach((input, index) => {
      formCategories.push(
        <InputCategory
          category={input.category}
          fields={input.fields}
          values={valueFields[index]}
        />
      );
    });

    return (
      <div>
        Add your deets!
        {/* <form onSubmit={this.onSubmitForm}> */}
        <form>
          {formCategories}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default InputForm;
