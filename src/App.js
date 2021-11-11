// App.js

import React, { Component } from "react";
import Mainpage from "./components/Mainpage";

const inputs = [
  {
    category: "Personal",
    fields: [
      { label: "Name", name: "name", type: "text" },
      { label: "Email", name: "email", type: "email" },
      { label: "Phone Number", name: "phone", type: "text" },
    ],
  },
  {
    category: "Education",
    fields: [
      { label: "Institution Name", name: "institution", type: "text" },
      { label: "Course Name", name: "course", type: "text" },
      { label: "From", name: "ed-from", type: "number" },
      { label: "To", name: "ed-to", type: "number" },
    ],
  },
  {
    category: "Work Experience",
    fields: [
      { label: "Company Name", name: "company", type: "text" },
      { label: "Position Title", name: "position", type: "text" },
      { label: "From", name: "work-from", type: "number" },
      { label: "Until", name: "work-to", type: "number" },
    ],
  },
];

class App extends Component {
  constructor() {
    super();
    //! new
    //TODO read Handling Multiple Inputs on https://reactjs.org/docs/forms.html
    this.state = [
      {
        category: "Personal",
        fields: [
          { name: "name", value: "ANGUS Young" },
          { name: "email", value: "angus@acdc.com" },
          { name: "phone", value: "1-888-YOU-ROCK" },
        ],
      },
      {
        category: "Education",
        fields: [
          { name: "institution", value: "The School of Rock" },
          { name: "course", value: "Rock Appreciation 101" },
          { name: "ed-from", value: "1970" },
          { name: "ed-to", value: "1971" },
        ],
      },
      {
        category: "Experience",
        fields: [
          { name: "company", value: "AC/DC" },
          { name: "position", value: "Lead Guitar" },
          { name: "work-from", value: "1972" },
          { name: "work-to", value: "2021" },
        ],
      },
    ];
    //  this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <Mainpage
          inputs={inputs}
          values={this.state}
          onValueChange={this.handleValueChange}
        />
      </div>
    );
  }
}

export default App;
