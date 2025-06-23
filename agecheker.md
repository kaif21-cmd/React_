```jsx
const { Component } = require("react");

class App extends Component {
  state = {
    age: '',
    status: null
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  checkEligibility = () => {
    const { age } = this.state;
    if (age === '') {
      this.setState({ status: 'Please enter your age' });
    } else if (Number(age) >= 18) {
      this.setState({ status: `${age} - You are eligible (Adult)` });
    } else {
      this.setState({ status: `${age} - You are not eligible (Minor)` });
    }
  };

  render() {
    const { age, status } = this.state;
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1>🧑‍⚖️ Age Eligibility Checker</h1>

        <label htmlFor="ageInput">Enter your age:</label><br />
        <input
          type="number"
          name="age"
          id="ageInput"
          value={age}
          placeholder="Enter your age"
          onChange={this.handleChange}
        />
        <br /><br />

        <button onClick={this.checkEligibility}>Check Status</button>

        <br /><br />
        {status && <h2>{status}</h2>}
      </div>
    );
  }
}

export default App;

```
