import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContext from "./context/ThemeContext";

ReactDOM.render(
  <ThemeContext.Provider value="blue">
    <App />
  </ThemeContext.Provider>,

  document.getElementById("root")
);
