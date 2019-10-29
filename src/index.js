import React from "react";
import ReactDOM from "react-dom";

import Keypad from "./components/Keypad";
import EyesOnMe from "./components/EyesOnMe";

// passwordText = "";
// RenderPassword = text => {
//   passwordText = text;
// };

ReactDOM.render(
  <div>
    <Keypad /> {/* onRenderPassword={this.RenderPassword} */}
    {/* <p>{passwordText}</p> */}
    <EyesOnMe />
  </div>,
  document.getElementById("global")
);
