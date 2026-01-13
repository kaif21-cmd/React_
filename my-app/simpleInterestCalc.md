```jsx
const { Component } = require("react");

class App extends Component {
  state = {
    principle: '',
    rate: '',
    time: '',
    result: null
  };

  handelChanger = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  si = () => {
    const { principle, rate, time } = this.state;
    const si = (Number(principle) * Number(rate) * Number(time)) / 100;
    this.setState({ result: `Simple Interest: ₹${si.toFixed(2)}` });
  };

  render() {
    const { principle, rate, time, result } = this.state;

    // Inline CSS styles
    const containerStyle = {
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif"
    };

    const inputStyle = {
      width: "100%",
      padding: "8px",
      marginBottom: "15px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px"
    };

    const labelStyle = {
      marginBottom: "5px",
      display: "block",
      fontWeight: "bold"
    };

    const buttonStyle = {
      width: "100%",
      padding: "10px",
      backgroundColor: "#4CAF50",
      color: "white",
      fontSize: "16px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer"
    };

    const resultStyle = {
      marginTop: "20px",
      fontSize: "18px",
      color: "#333",
      fontWeight: "bold",
      textAlign: "center"
    };

    return (
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center" }}>Simple Interest Calculator</h2>

        <label htmlFor="principle" style={labelStyle}>Principle:</label>
        <input
          type='number'
          name='principle'
          value={principle}
          placeholder="Enter the Principle"
          onChange={this.handelChanger}
          style={inputStyle}
        />

        <label htmlFor="rate" style={labelStyle}>Rate:</label>
        <input
          type='number'
          name='rate'
          value={rate}
          placeholder="Enter the Rate"
          onChange={this.handelChanger}
          style={inputStyle}
        />

        <label htmlFor="time" style={labelStyle}>Time:</label>
        <input
          type='number'
          name='time'
          value={time}
          placeholder="Enter the Time"
          onChange={this.handelChanger}
          style={inputStyle}
        />

        <button onClick={this.si} style={buttonStyle}>Calculate SI</button>

        {result && <div style={resultStyle}>{result}</div>}
      </div>
    );
  }
}

export default App;

```
