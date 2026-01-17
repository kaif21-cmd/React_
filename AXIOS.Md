### AXIOS
Axios is a JavaScript library which can make HTTP requests to fetch data. In this section we will see on a get request. However, it is possible to do all the request types using axios (GET, POST, PUT, PATCH, DELETE).
EASY WAY TO HANDEL WITH API 

```jsx
import React, { Component } from 'react';
import axios from 'axios';
import './kaif.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: '',
      loading: true,
      error: null,
    };

    // Bind the method to handle button click
    this.fetchJoke = this.fetchJoke.bind(this);
  }

  componentDidMount() {
    this.fetchJoke();
  }

  fetchJoke() {
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?type=single'; // Replace with your actual API endpoint
    axios.get(apiUrl)
      .then(response => {
        const data = response.data;
        this.setState({
          joke: data.joke,
          loading: false,
          error: null,
        });
      })
      .catch(error => {
        this.setState({
          error: 'Error fetching data',
          loading: false,
        });
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { joke, loading, error } = this.state;

    return (
      <div className="container">
        <h1>JOKE GENERATOR</h1>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : (
            <p className="joke-text">{joke}</p>
          )}
          <button onClick={this.fetchJoke}>
            Click for a new joke
          </button>
        </div>
      </div>
    );
  }
}

export default App;

```
