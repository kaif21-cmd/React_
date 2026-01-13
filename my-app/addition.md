```jsx
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: null
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addNumbers = () => {
    const { num1, num2 } = this.state;
    const sum = Number(num1) + Number(num2);
    this.setState({ result: sum });
  };

  render() {
    const { num1, num2, result } = this.state;

    // Inline CSS styles
    const containerStyle = {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      border: '2px solid #ccc',
      borderRadius: '10px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial'
    };

    const inputStyle = {
      padding: '10px',
      width: '80%',
      fontSize: '16px',
      marginBottom: '10px'
    };

    const buttonStyle = {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    };

    const resultStyle = {
      marginTop: '20px',
      fontSize: '20px',
      color: '#333'
    };

    return (
      <div style={containerStyle}>
        <h1>Add Two Numbers</h1>
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={this.handleChange}
          placeholder="Enter first number"
          style={inputStyle}
        />
        <br />
        <input
          type="number"
          name="num2"
          value={num2}
          onChange={this.handleChange}
          placeholder="Enter second number"
          style={inputStyle}
        />
        <br />
        <button onClick={this.addNumbers} style={buttonStyle}>Add</button>
        <div style={resultStyle}>
          Result: {result !== null ? result : '---'}
        </div>
      </div>
    );
  }
}

export default App;

```
