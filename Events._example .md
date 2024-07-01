# Events Exmaple 
Event handling is a very vast topic and in this challenge we will focus on the most common event types. We may use the following mouse and keyboard events. onMouseMove, onMouseEnter, onMouseLeave, onMouseOut, onClick, onKeyDown, onKeyPress, onKeyUp, onCopy, onCut, onDrag, onChange,onBlur,onInput, onSubmit
```jsx
import React, { Component } from 'react'
class App extends Component{
  state={
    firstname:'',
    message:'',
    key:'',
  }
  handleClick=(e)=>{
  this.setState({
    message:'Welcome to Kaif'
  })
  }
  handleMouseMove=(e)=>{
    this.setState({
      message:'Mouse Moving'
    })
  }
  handleKeyPress=(e)=>{
    this.setState({
      message:
      `${e.target.value} has been pressed and the keycode is` + e.charCode,
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>CLICK ME</button>
        <button onClick={this.handleMouseMove}>CLICK ME</button>
        <label htmlFor=''>Test For onkeyPress Event: </label>
        <input type='text' onKeyPress={this.handleKeyPress}></input>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlfor='firstname'>First Name:</label>
            <input onChange={this.handleChange} name='firstname' value ={this.state.value} />
          </div>
          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}
export default App
```
