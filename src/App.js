// App.js

import React, { Component } from "react";
import Mainpage from "./components/Mainpage";

//TODO reorg fields to include input types such as email, ph, date
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
  render() {
    return (
      <div className="App">
        <Mainpage inputs={inputs} />
      </div>
    );
  }
}

export default App;
