```jsx
const { Component } = require("react");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      message: ''
    };
  }

  validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);

    if (!minLength) return "Password must include at least 8 characters";
    if (!hasUpper) return "Password must include an uppercase letter";
    if (!hasLower) return "Password must include a lowercase letter";
    if (!hasNumber) return "Password must include a number";
    if (!hasSpecial) return "Password must include a special character";

    return "Password is valid";
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const message = this.validatePassword(value);
    this.setState({ [name]: value, message });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Password Validator</h2>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleChange}
          style={{ padding: "5px", width: "200px" }}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;

```
