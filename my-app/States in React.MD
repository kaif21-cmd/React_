# React Component with State
What is state ? The English meaning of state is the particular condition that someone or something is in at a specific time
In React, `state` is an object that holds some information that may change over the lifecycle of the component. State is managed within the component similar to variables declared within a function. A component's state can be modified using the `this.setState` method, and it triggers a re-render of the component.

# HOW TO SET STATE ?
We set an initial state inside the constructor or outside the constructor of a class based component. We do not directly change or mutate the state but we use the setState() method to reset to a new state. . As you can see below in the state object we have count with initial value 0. We can access the state object using this.state and the property name. See the example below.
## Example: Counter Component

This example demonstrates a simple counter component that increments or decrements the count based on button clicks.

```jsx
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  };

  // Method to increment count
  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Method to decrement count
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const count = this.state.count;
    return (
      <div className='App'>
        <h1>{count}</h1>
        <div>
          <button className='btn btn-add' onClick={this.addOne}>+1</button>
          <button className='btn btn-minus' onClick={this.minusOne}>-1</button>
        </div>
      </div>
    );
  }
}

export default App;
