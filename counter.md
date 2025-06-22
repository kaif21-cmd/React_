```jsx
import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment} disabled={this.state.count >= 10}>+</button>
        <button onClick={this.decrement} disabled={this.state.count <= 0}>-</button>
      </div>
    );
  }
}

export default Counter;

```
