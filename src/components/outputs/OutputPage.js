// OutputPage.js

import React, { Component } from "react";
import OutputCategory from "./OutputCategory";

const defaults = [
  {
    category: "Personal",
    fields: [
      { name: "Name", value: "John J. JavaScript" },
      { name: "Email", value: "johnj@jjj.dev" },
      { name: "Phone", value: "1-780-672-0934" },
    ],
  },
  {
    category: "Education",
    fields: [
      { name: "Institution", value: "School of Hard Knocks" },
      { name: "Course", value: "Web Development 101" },
      { name: "From", value: Date(1 - 1 - 2015) },
      { name: "To", value: Date(12 - 31 - 2020) },
    ],
  },
  {
    category: "Work Experience",
    fields: [
      { name: "Company", value: "ACME Development" },
      { name: "Position", value: "React Developer" },
      { name: "From", value: Date(1 - 1 - 2021) },
      { name: "Until", value: Date(12 - 31 - 2021) },
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
        <OutputCategory category={def.category} fields={def.fields} />
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
