```jsx
const { Component } = require("react");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: '',
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    this.setState({ loading: true, error: null });

    fetch('https://api.adviceslip.com/advice')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network error');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          advice: data.slip.advice,
          loading: false
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({ error: 'Failed to fetch advice.', loading: false });
      });
  };

  render() {
    const { advice, loading, error } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
        <h1>💬 Advice Generator</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading && advice && (
          <div>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>"{advice}"</p>
            <button onClick={this.fetchAdvice}>🔁 New Advice</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;

```
