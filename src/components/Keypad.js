import React from "react";

export default class Keypad extends React.Component {
  state = {
    text: ""
  };

  handleEnterPassword = e => {
    console.log(e.target.value);
    this.setState({
      text: e.target.value
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    console.log("submitting");
    // this.props.onRenderPassword(this.state);
    // console.log(this);
    // this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label htmlFor="name">Enter Text</label>
        <input
          type="password"
          name="name"
          onKeyUp={this.handleEnterPassword}
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
