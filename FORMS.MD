# Forms in React
```jsx
import React, { Component } from 'react';

class App extends Component {
  state = {
    id: '',
    rollNo: '',
    firstName: '',
    lastName: '',
    message: '',
    email: '',
    phone: ''
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { id, rollNo, firstName, lastName, message, email, phone } = this.state;
    return (
      <div>
        <label htmlFor='id'>ID:</label>
        <input
          type='text'
          id='id'
          name='id'
          placeholder='ID'
          value={id}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor='rollNo'>Roll No:</label>
        <input
          type='text'
          id='rollNo'
          name='rollNo'
          placeholder='Roll No'
          value={rollNo}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          value={firstName}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          placeholder='Last Name'
          value={lastName}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor='message'>Message:</label>
        <input
          type='text'
          id='message'
          name='message'
          placeholder='Message'
          value={message}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
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
        <h1>ID: {id}</h1>
        <h1>Roll No: {rollNo}</h1>
        <h1>First Name: {firstName}</h1>
        <h1>Last Name: {lastName}</h1>
        <h1>Message: {message}</h1>
        <h1>Email: {email}</h1>
        <h1>Phone: {phone}</h1>
      </div>
    );
  }
}

export default App;
```
