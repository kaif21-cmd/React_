```jsx
const { Component } = require("react");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      result: null,
    };
  }

  handleChange = (e) => {
    this.setState({ number: e.target.value });
  };

  calculateFactorial = () => {
    const { number } = this.state;
    const num = Number(number);

    if (isNaN(num) || num < 0) {
      this.setState({ result: 'Please enter a non-negative number' });
      return;
    }

    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }

    this.setState({ result: `Factorial of ${num} is ${factorial}` });
  };

  render() {
    const { number, result } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1>Factorial Calculator</h1>
        <input
          type="number"
          value={number}
          onChange={this.handleChange}
          placeholder="Enter a non-negative number"
        />
        <br /><br />
        <button onClick={this.calculateFactorial}>Get Factorial</button>
        <br /><br />
        {result !== null && <h2>{result}</h2>}
      </div>
    );
  }
}

export default App;

```
