// OutputPage.js

import React, { Component } from "react";
import OutputCategory from "./OutputCategory";

const defaults = [
  {
    category: "Personal",
    fields: [
      { name: "Name", value: "Angus Young" },
      { name: "Email", value: "angus@acdc.com" },
      { name: "Phone", value: "1-888-YOU-ROCK" },
    ],
  },
  {
    category: "Education",
    fields: [
      { name: "Institution", value: "The School of Rock" },
      { name: "Course", value: "Rock Stars 101" },
      { name: "From", value: 1 - 1 - 1970 },
      { name: "To", value: 1 - 31 - 1970 },
    ],
  },
  {
    category: "Work Experience",
    fields: [
      { name: "Company", value: "AC/DC" },
      { name: "Position", value: "Lead Guitar" },
      { name: "From", value: 1 - 1 - 1970 },
      { name: "Until", value: 12 - 31 - 2021 },
    ],
  },
];

class OutputPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const outputCategories = [];
    defaults.forEach((def) => {
      outputCategories.push(
        <OutputCategory
          category={def.category}
          fields={def.fields}
          testname={this.props.testname}
          testvalue={this.props.testvalue}
        />
      );
    });
    return (
      <div className="outputpage">
        See the magic!
        {this.props.outputs.tester}
        {outputCategories}
      </div>
    );
  }
}

export default OutputPage;
