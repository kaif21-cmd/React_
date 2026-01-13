```jsx
const { Component } = require("react");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      square: null,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  square = () => {
    const { number } = this.state;
    const squareResult = Number(number) * Number(number);
    this.setState({
      square: squareResult
    });
  }

  render() {
    const { number, square } = this.state;
    return (
      <div>
        <input
          type="number"
          name="number"
          value={number}
          onChange={this.handleChange}
        />
        <button onClick={this.square}>Find Square</button>
        {square !== null && <p>Square: {square}</p>}
      </div>
    );
  }
}
module.exports = App;

```
