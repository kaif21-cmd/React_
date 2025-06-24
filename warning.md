```jsx
import React, { Component } from 'react';

class CounterLimitApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      warning: '',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count > 15 || nextState.count < 0) {
      alert('Limit reached! Cannot go beyond this point.');
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count > 10 && prevState.count <= 10) {
      this.setState({ warning: '⚠️ Warning: High count!' });
    } else if (this.state.count <= 10 && prevState.count > 10) {
      this.setState({ warning: '' });
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count, warning } = this.state;

    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h1>Count: {count}</h1>
        <button onClick={this.increment} style={{ margin: '10px' }}>Increment</button>
        <button onClick={this.decrement} style={{ margin: '10px' }}>Decrement</button>
        <h2 style={{ color: 'red' }}>{warning}</h2>
      </div>
    );
  }
}

export default CounterLimitApp;

```
