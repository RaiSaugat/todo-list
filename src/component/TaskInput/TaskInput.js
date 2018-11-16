import React, { Component } from "react";
import TaskList from "../TaskList/TaskList";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskList: ["Groceries"],
      completed: ["Do HomeWork"]
    };
  }

  onTextHandler = event => {
    const task = event.target.value;
    this.setState({
      task
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      task: "",
      taskList: [...this.state.taskList, this.state.task]
    });
  };
  handleClickItem = key => {
    this.setState({
      taskList: this.state.taskList.filter((task, index) => index !== key),
      completed: [
        ...this.state.completed,
        this.state.taskList.find((task, index) => index === key)
      ]
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="taskInput">
          <input
            type="text"
            placeholder="Enter Task"
            value={this.state.task}
            onChange={this.onTextHandler}
          />
          <button>Add task</button>
        </form>
        <TaskList
          tasks={this.state.taskList}
          onClickItem={this.handleClickItem}
          completed={this.state.completed}
        />
      </div>
    );
  }
}
export default Task;
