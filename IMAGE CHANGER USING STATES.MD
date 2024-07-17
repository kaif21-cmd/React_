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
