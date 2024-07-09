 # Form Logic How to Create Forms In React
```jsx
import React, { Component } from 'react'
class App extends Component{
    state={
        firstname:'',
        lastname:''
    }
    handelChange=(e)=>{
    const value=e.target.value
    this.setState({
        firstname:value
    })
    }
    handleChange=(e)=>{
        const value=e.target.value
        this.setState({
          lastname:value
        })
      }
      render(){
        const firstName=this.state.firstName
        const lastname=this.state.lastname
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
          <br></br>
          <label htmlFor='lastname'>lastname:</label>
          <input
          type='text'
          id='lastname'
          name='lastname'
          placeholder='Latname'
          value={lastname}
          onChange={this.handleChange}
          />
          <h1>{this.state.firstName}</h1>
          <h1>{this.state.lastname}</h1>
         </div>
        )
      }
    
}
export default App
```

