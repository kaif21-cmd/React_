```jsx
import React, { Component } from "react";

class PasswordValidator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      isValid: false,
      message: ""
    };
  }

  validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);

    if (!minLength) return "Password must be at least 8 characters";
    if (!hasUpper) return "Must include an uppercase letter";
    if (!hasLower) return "Must include a lowercase letter";
    if (!hasNumber) return "Must include a number";
    if (!hasSpecial) return "Must include a special character";

    return "Valid Password";
  };

  handleChange = (e) => {
    const password = e.target.value;
    const message = this.validatePassword(password);
    const isValid = message === "Valid Password";
    this.setState({ password, message, isValid });
  };

  render() {
    const { password, message, isValid } = this.state;

    return (
      <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <h2>Password Validator</h2>
        <input
          type="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Enter password"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <p style={{ color: isValid ? "green" : "red" }}>{message}</p>
      </div>
    );
  }
}

export default PasswordValidator;

```
