# Weather App
```jsx
// c4be821dd7faa4f0057f9e17b0354d07
import React, { Component } from 'react';
import './kaif.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      loading: true,
      error: null,
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.fetchWeatherData('London'); // Default city
  }

  fetchWeatherData = (city) => {
    const apiKey = 'c4be821dd7faa4f0057f9e17b0354d07';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    this.setState({ loading: true, error: null });

    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not okay');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          weatherData: [data],
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: 'Error in network',
          loading: false,
        });
        console.log('Error in network', error);
      });
  };

  handleSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm) {
      this.fetchWeatherData(searchTerm);
    }
  };

  render() {
    const { loading, error, weatherData, searchTerm } = this.state;

    return (
      <div className="container">
        <h1>Weather App</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search For a City"
            value={searchTerm}
            onChange={this.handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">Error...</p>}
        <ul>
          {weatherData.map((data) => (
            <li key={data.id}>
              <strong>City:</strong> {data.name}
              <br />
              <strong>Temperature:</strong> {data.main.temp}°C
              <br />
              <strong>Weather:</strong> {data.weather[0].description}
              <br />
              <strong>Humidity:</strong> {data.main.humidity}%
              <br />
              <strong>Wind Speed:</strong> {data.wind.speed} m/s
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

```
