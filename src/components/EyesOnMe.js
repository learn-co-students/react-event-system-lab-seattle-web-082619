import React from "react";

export default class EyesOnMe extends React.Component {
  handleButtonBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  handleButtonFocus = () => {
    console.log("Good!");
  };

  render() {
    return (
      <button onBlur={this.handleButtonBlur} onFocus={this.handleButtonFocus}>
        Click me
      </button>
    );
  }
}
