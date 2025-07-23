# FETCHING API BY SERCHINg
```jsx
import React, { Component } from 'react';
import './kaif.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      loading: true,
      error: null,
      searchTerm: '',
    };
  }

  componentDidMount() {
    const api = 'https://freetestapi.com/api/v1/countries';
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network Was Not Okay');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          countries: data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: 'Error in network',
          loading: false,
        });
        console.log('error in network', error);
      });
  }

  handleSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    const { loading, error, countries, searchTerm } = this.state;
    const filtercountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div className="container">
        <h1>Countries Data</h1>
        <input
          type="text"
          placeholder="Search For a Country"
          value={searchTerm}
          onChange={this.handleSearchChange}
        />
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">Error...</p>}
        <ul>
          {filtercountries.map((country) => (
            <li key={country.id}>
              <strong>Name:</strong> {country.name}
              <br />
              <strong>Capital:</strong> {country.capital}
              <br />
              <strong>Population:</strong> {country.population}
              <br />
              <strong>Land Area:</strong> {country.land_area}
              <br />
              <strong>Flag:</strong> <img src={country.flag} alt={`${country.name} flag`} width="50" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

```
# CSS
```jsx
/* App.css */

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

input[type='text'] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

li img {
  display: block;
  margin-top: 10px;
}

li strong {
  color: #555;
}

.loading, .error {
  text-align: center;
  font-size: 1.2em;
  color: #888;
}

```
# Live Link
[CLICK](https://66938d898d894f14c9457a01--dapper-lollipop-bcec0a.netlify.app/).

