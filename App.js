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