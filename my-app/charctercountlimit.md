```jsx
import React, { Component } from "react";

class CharCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      message: ""
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.text.length <= 100; // Don't update if over 100 chars
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.text.length < 100 && this.state.text.length === 100) {
      this.setState({ message: "You've reached the 100 character limit!" });
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <textarea
          value={this.state.text}
          onChange={this.handleChange}
          rows="4"
          cols="50"
          placeholder="Type something..."
        />
        <p>Character Count: {this.state.text.length}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default CharCounter;

```
