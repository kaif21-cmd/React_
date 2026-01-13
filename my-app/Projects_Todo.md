# 2nd Project TO-DO Application
```jsx
import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [],
    newTodo: ''
  };

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = () => {
    if (this.state.newTodo.trim() === '') return;
    this.setState(prevState => ({
      todos: [...prevState.todos, prevState.newTodo],
      newTodo: ''
    }));
  };

  removeTodo = (index) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter((_, i) => i !== index)
    }));
  };

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <input
          type='text'
          value={this.state.newTodo}
          onChange={this.handleInputChange}
          placeholder='Enter a new to-do'
        />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
```
