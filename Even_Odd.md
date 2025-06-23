```JSX
const { Component } = require("react");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      result: '',
    };
  }

  handleChange = (e) => {
    this.setState({ number: e.target.value });
  };

  checkEvenOdd = () => {
    const { number } = this.state;
    if (number === '') {
      this.setState({ result: 'Please enter a number' });
    } else if (Number(number) % 2 === 0) {
      this.setState({ result: `${number} is Even` });
    } else {
      this.setState({ result: `${number} is Odd` });
    }
  };

  render() {
    const { number, result } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1>Even or Odd Checker</h1>
        <input
          type="number"
          value={number}
          onChange={this.handleChange}
          placeholder="Enter a number"
        />
        <br /><br />
        <button onClick={this.checkEvenOdd}>Check</button>
        <br /><br />
        <h2>{result}</h2>
      </div>
    );
  }
}

export default App;

```
