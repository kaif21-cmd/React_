```jsx
const { Component } = require("react");

class App extends Component{
  state={
    number:'',
    result:null
  }
  handelChange=(e)=>{
    const {name,value}=e.target
    this.setState({
    [name]:value
    })
  }
  palindrome=()=>{
    const {number}=this.state
    const reversed=number.split('').reverse('').join('')
    if(number===reversed){
      this.setState({
        result:`the number is a palindrome number ${number}`
      })
    }
    else{
      this.setState({
        result:`the number is not a palindrome number ${number}`
      })
    }
  }
  render(){
    const {number,result}=this.state
    return(
      <div>
        
        <input
        type='number'
        name="number"
        value={number}
        onChange={this.handelChange}
        placeholder="Enter the Number"
        >
        </input>
        <button
        onClick={this.palindrome}
        >
       check palindrome
        </button>
        <h1>{result}</h1>

      </div>
    )
  }
}
export default App;
```
