```jsx
const { Component } = require("react");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
            currentIndex: 0,
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchJokes();
    }

    fetchJokes = () => {
        this.setState({ loading: true, error: null });
        fetch('https://official-joke-api.appspot.com/jokes/ten')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ jokes: data, loading: false, currentIndex: 0 });
            })
            .catch(error => {
                this.setState({ error: 'Error fetching jokes', loading: false });
                console.error('Error fetching:', error);
            });
    }

    handleNextJoke = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }

    render() {
        const { jokes, currentIndex, loading, error } = this.state;
        const joke = jokes[currentIndex];

        return (
            <div>
                <h1>😂 Joke of the Moment</h1>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {!loading && joke && (
                    <div>
                        <p><strong>{joke.setup}</strong></p>
                        <p>{joke.punchline}</p>
                        <button
                            onClick={this.handleNextJoke}
                            disabled={currentIndex >= jokes.length - 1}
                        >
                            Next Joke
                        </button>
                    </div>
                )}

                {!loading && !joke && (
                    <p>No jokes found.</p>
                )}
            </div>
        );
    }
}

export default App;

```
