```jsx
const { Component } = require("react");

class App extends Component {
  state = {
    text: '',
    wordCount: 0,
    letterCount: 0,
  };

  handleChange = (e) => {
    const newText = e.target.value;

    const words = newText.trim().split(/\s+/).filter(Boolean); // split by space, filter empty
    const letters = newText.replace(/\s/g, ''); // remove all spaces

    this.setState({
      text: newText,
      wordCount: words.length,
      letterCount: letters.length,
    });
  };

  render() {
    const { text, wordCount, letterCount } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1>📊 Live Word & Letter Counter</h1>

        <textarea
          rows="5"
          cols="40"
          placeholder="Start typing..."
          value={text}
          onChange={this.handleChange}
        ></textarea>
        <br /><br />

        <h2>Words: {wordCount}</h2>
        <h2>Letters (no spaces): {letterCount}</h2>
      </div>
    );
  }
}

export default App;

```
