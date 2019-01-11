import React, { Component } from "react";
import "./App.css";

import FormDetails from "./Components/FormDetails";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header"> EMPLOYEE FORM</div>
        <div className="app-div">
          <FormDetails />
        </div>
      </div>
    );
  }
}

export default App;


