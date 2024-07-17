# IMAGE CHANGE USING STATE
```jsx
import React, { Component } from 'react';
import './Kaif.css';  // Import the CSS file

class App extends Component {
  state = {
    image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg'
  };

  changeAnimal = () => {
    let dogurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7zpG7Q2QGK9YGchMgfbXycRtDimjSCjk8w&s';
    let caturl = 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg';
    let image = this.state.image === caturl ? dogurl : caturl;
    this.setState({
      image
    });
  };

  render() {
    return (
      <div>
        <img
          src={this.state.image}
          alt='animal'
        />
        <br>
        </br>
        <button
          onClick={this.changeAnimal}
        >
          Change
        </button>
      </div>
    );
  }
}


export default App;

```

# css
```jsx
/* Center the content vertically and horizontally */
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #080808;
  }
  
  #root {
    text-align: center;
  }
  
  /* Style the image with fixed dimensions */
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;  /* Ensures the image is resized to cover the entire area */
    border: 2px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  /* Style the button */
  button {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
```
