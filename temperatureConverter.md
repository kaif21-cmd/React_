```jsx
const { Component } = require("react");

class App extends Component {
  state = {
    tempc: '',
    tempf: '',
    result: ''
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  convertToFahrenheit = () => {
    const { tempc } = this.state;
    if (tempc === '') {
      this.setState({ result: 'Please enter Celsius temperature' });
      return;
    }
    const f = (Number(tempc) * 9/5) + 32;
    this.setState({ result: `${tempc}°C = ${f.toFixed(2)}°F` });
  };

  convertToCelsius = () => {
    const { tempf } = this.state;
    if (tempf === '') {
      this.setState({ result: 'Please enter Fahrenheit temperature' });
      return;
    }
    const c = (Number(tempf) - 32) * 5/9;
    this.setState({ result: `${tempf}°F = ${c.toFixed(2)}°C` });
  };

  render() {
    const { tempc, tempf, result } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1>🌡️ Temperature Converter</h1>

        <div>
          <label>Enter Celsius:</label><br />
          <input
            type="number"
            name="tempc"
            value={tempc}
            placeholder="°C"
            onChange={this.handleChange}
          />
          <button onClick={this.convertToFahrenheit}>Convert to °F</button>
        </div>

        <br />

        <div>
          <label>Enter Fahrenheit:</label><br />
          <input
            type="number"
            name="tempf"
            value={tempf}
            placeholder="°F"
            onChange={this.handleChange}
          />
          <button onClick={this.convertToCelsius}>Convert to °C</button>
        </div>

        <br />
        <h2>{result}</h2>
      </div>
    );
  }
}

export default App;

```
