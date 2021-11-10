// App.js

import React, { Component } from "react";
import Mainpage from "./components/Mainpage";

const inputs = [
  {
    category: "Personal",
    fields: [
      { name: "Name", type: "text" },
      { name: "Email", type: "email" },
      { name: "Phone Number", type: "number" },
    ],
  },
  {
    category: "Education",
    fields: [
      { name: "Institution Name", type: "text" },
      { name: "Course Name", type: "text" },
      { name: "From", type: "date" },
      { name: "To", type: "date" },
    ],
  },
  {
    category: "Work Experience",
    fields: [
      { name: "Company Name", type: "text" },
      { name: "Position Title", type: "text" },
      { name: "From", type: "date" },
      { name: "Until", type: "date" },
    ],
  },
];

class App extends Component {
  constructor() {
    super();
    //! new
    //TODO read Handling Multiple Inputs on https://reactjs.org/docs/forms.html
    this.state = {
      name: {
        text: "",
        id: "name",
      },
      outputData: [],
      tester: "pass the state, man!",
    };
  }
  render() {
    return (
      <div className="App">
        <Mainpage inputs={inputs} output={this.state} />
      </div>
    );
  }
}

export default App;
