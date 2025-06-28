```jsx
import React, { Component } from "react";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      todos: [],
    };
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  addTask = () => {
    const { task, todos } = this.state;
    if (task.trim() !== "") {
      this.setState({
        todos: [...todos, task],
        task: "",
      });
    }
  };

  deleteTask = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  render() {
    const { task, todos } = this.state;
    return (
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <h2>📝 Todo App</h2>
        <input
          type="text"
          value={task}
          onChange={this.handleChange}
          placeholder="Enter a task"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button onClick={this.addTask} style={{ padding: "8px 16px" }}>
          Add Task
        </button>

        <ul style={{ marginTop: "20px" }}>
          {todos.map((todo, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {todo}
              <button
                onClick={() => this.deleteTask(index)}
                style={{
                  marginLeft: "10px",
                  padding: "2px 8px",
                  background: "red",
                  color: "white",
                  border: "none",
                }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;

```
