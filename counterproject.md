#counter project 
#App.js
```jsx
import React, { Component } from 'react'
import './kaif.css'
class App extends Component{
  state={
    count:0,
  }
  addone=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  minusone=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  render(){
    const count=this.state.count
    return(
      <div>
        <h1>A counter Project In React By Kaif</h1>
        <h1>{count}</h1>
        <div>
        <button
        className='Kaif'
        onClick={this.addone}
        >
        +1
        </button>
        <button
        className='Kaif'
        onClick={this.minusone}
        >
        -1
        </button>
        
        </div>
        
      </div>
    )
  }
}
export default App

#Kaif.css
body{
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    margin:0;
  }
  h1{
    font-size:3rem;
    color:#333;
    margin:0
  }
  div{
    text-align:center
  }
  .Kaif {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .Kaif:hover {
    background-color: #0056b3;
  }
  You can check out the live demo here
  ```
