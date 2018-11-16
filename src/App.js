import React, { Component } from "react";
import "./App.css";
import Task from "./component/TaskInput/TaskInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To Do</h1>
        <Task />
      </div>
    );
  }
}

export default App;
