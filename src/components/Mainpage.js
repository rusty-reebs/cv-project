// Mainpage.js

import React, { Component } from "react";
import InputForm from "./InputForm";

class Mainpage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="titlediv">
          <h1>Rusty's Resume Generator</h1>
          <h3>A project written in React and CSS</h3>
        </div>
        <div>
          <InputForm inputs={this.props.inputs} />
          {/* OutputPage */}
        </div>
      </div>
    );
  }
}

export default Mainpage;
