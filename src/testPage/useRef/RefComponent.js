import React, { Component } from "react";

class RefComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInputMethod = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default RefComponent;
