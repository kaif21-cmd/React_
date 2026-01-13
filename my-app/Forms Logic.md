 # Form Logic How to Create Forms In React
```jsx
import React, { Component } from 'react';
import './kaif.css' // Assuming you have created App.css for styling

class App extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here if needed
  };

  render() {
    const { firstname, lastname, email, phone } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='firstname'>Firstname:</label>
          <input
            type='text'
            id='firstname'
            name='firstname'
            placeholder='Firstname'
            value={firstname}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='lastname'>Lastname:</label>
          <input
            type='text'
            id='lastname'
            name='lastname'
            placeholder='Lastname'
            value={lastname}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='phone'>Phone:</label>
          <input
            type='text'
            id='phone'
            name='phone'
            placeholder='Phone'
            value={phone}
            onChange={this.handleChange}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
        <div>
          <h1>First Name: {firstname}</h1>
          <h1>Last Name: {lastname}</h1>
          <h1>Email: {email}</h1>
          <h1>Phone: {phone}</h1>
        </div>
      </div>
    );
  }
}

export default App;


export default App;


```

