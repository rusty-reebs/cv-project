// Mainpage.js

import React, { Component } from "react";
import InputForm from "./inputs/InputForm";
import OutputPage from "./outputs/OutputPage";

class Mainpage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainpage">
        <div className="titlediv">
          <h1>Rusty's Resume Generator</h1>
          <h3>A project written in React and CSS</h3>
        </div>
        <div className="inputoutput">
          <InputForm inputs={this.props.inputs} />
          <OutputPage outputs={this.props.output} />
        </div>
      </div>
    );
  }
}

export default Mainpage;
