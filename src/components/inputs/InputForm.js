// InputForm.js

import React, { Component } from "react";
import InputCategory from "./InputCategory";

class InputForm extends Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     name: {
    //       text: "",
    //       id: "name",
    //     },
    //     outputData: [],
    //   };
  }

  // handleChange = (e) => {
  //   this.setState({
  //     name: {
  //       text: e.target.value,
  //     },
  //   });
  // };

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
    const formCategories = [];
    this.props.inputs.forEach((input) => {
      formCategories.push(
        <InputCategory category={input.category} fields={input.fields} />
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
