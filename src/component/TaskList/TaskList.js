import React, { Component } from "react";

class TaskList extends Component {
  handleTodo = e => {
    this.props.onClickItem(parseInt(e.target.id, 10));
  };
  render() {
    let renderList = this.props.tasks.map((task, index) => {
      return (
        <li type="1" key={index}>
          {task}
          <a className="remove" id={index} onClick={this.handleTodo}>
            x
          </a>
        </li>
      );
    });
    return (
      <div className="taskList">
        <div className="todoList">
          <h4>To Do</h4>
          <ul>
            {this.props.tasks.length > 0 ? renderList : "Hurray No task today"}
          </ul>
        </div>
        <div className="completedList">
          <h4>Completed</h4>
          <ul>
            {this.props.completed.map((task, index) => {
              return (
                <li type="1" key={index}>
                  {task}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskList;
