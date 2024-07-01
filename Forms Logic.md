 # Form Logic How to Create Forms In React
```jsx
import React, { Component } from 'react'
class App extends Component{
  state={
    firstName:'',
    lastName:''
  }
  handleChange=(e)=>{
    const value=e.target.value
    this.setState({
      firstName:value
    })
  }
  render(){
    const firstName=this.state.firstName
    return(
     <div>
      <label htmlFor='firstname'>FirstName:</label>
      <input
      type='text'
      id='firstName'
      name='firstName'
      placeholder='First Name'
      value={firstName}
      onChange={this.handleChange}
      />
      <h1>{this.state.firstName}</h1>
     </div>
    )
  }
}
```
export default App
