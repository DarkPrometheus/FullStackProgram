import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoText: "",
    todos: [],
  };
  render() {
    return (
      <div>
        <h5>Simple todo app</h5>

        <div>
          <input
            type="text"
            value={this.state.todoText}
            onChange={this.handleTextChanged}
            placeholder="Todo text"
          ></input>
          <button onClick={this.addTodo}>Add</button>
        </div>

        <div>
          <ul>
            {this.state.todos.map((td, i) => (
              <li key={i}>{td}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  handleTextChanged = (event) => {
    this.setState({ todoText: event.target.value });
  };

  addTodo = (ev) => {
    this.setState({
      todos: [...this.state.todos, this.state.todoText],
      todoText: "",
    });
  };
}

export default Todo;