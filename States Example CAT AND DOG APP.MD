# React Component with State

In React, `state` is an object that holds some information that may change over the lifecycle of the component. State is managed within the component similar to variables declared within a function. A component's state can be modified using the `this.setState` method, and it triggers a re-render of the component.

## Example: Animal Image Changer Component

This example demonstrates a simple component that toggles between displaying a cat image and a dog image when a button is clicked.

```jsx
import React, { Component } from 'react';

class App extends Component {
  // declaring state
  state = {
    image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
  };

  changeAnimal = () => {
    let dogURL = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg';
    let catURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPklASDlWPMrV9dX0Rwn-uo4in7FFXVN_9JjH4exam7v71LB76tb9VkDQ37DexLlerl3A&usqp=CAU';
    let image = this.state.image === catURL ? dogURL : catURL;
    this.setState({ image });
  };

  render() {
    // accessing the state value
    return (
      <div className='App'>
        <h1>30 Days Of React</h1>
        <div className='animal'>
          <img src={this.state.image} alt='animal' />
        </div>

        <button onClick={this.changeAnimal} className='btn btn-add'>
          Change
        </button>
      </div>
    );
  }
}

export default App;
