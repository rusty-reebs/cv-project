// App.js

import React, { Component } from "react";
import Mainpage from "./components/Mainpage";

const inputs = [
  {
    category: "Personal",
    fields: ["Name", "Email", "Phone Number"],
  },
  {
    category: "Education",
    fields: ["Institution Name", "Course Name", "From", "To"],
  },
  {
    category: "Work Experience",
    fields: ["Company Name", "Position Title", "From", "Until"],
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
