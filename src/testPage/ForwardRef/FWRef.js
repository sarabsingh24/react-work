import React, { Component } from "react";
import ChildComponent from "./ChildCompo";

export default class FWRef extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  clickHandeler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <ChildComponent ref={this.inputRef} />
        <button onClick={this.clickHandeler}>Highlight</button>
      </div>
    );
  }
}
