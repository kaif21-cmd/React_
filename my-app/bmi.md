```jsx
const { Component } = require("react");

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      weigth:'',
      height:'',
      bmi:'',
      category:''
    }
  }
  handelweigthchange=(e)=>{
    this.setState({
      weigth:e.target.value
    })
  }
  handelheigthchange=(e)=>{
    this.setState({
      height:e.target.value
    })
  }
  calculatebmi=()=>{
    const {height,weigth}=this.state

    const heightinmeter=height/100
    const bmi=weigth/(heightinmeter*heightinmeter)
    const roundedbmi=bmi.toFixed(2)

    let category='';
    if(bmi<18.5) category='underweight';
    else if(bmi<24.9) category='normal'
    else if(bmi<29.9) category='overweight'
    else category ='obese'

    this.setState({
      bmi:roundedbmi,category
    })
  }
  render(){
    const {weigth,height,bmi,category}=this.state
    return(
      <div>
        <input
        type='number'
        placeholder="weight"
        value={weigth}
        onChange={this.handelweigthchange}
        >
        </input>
        <br>
        </br>
        <input
        type='number'
        placeholder="heigth"
        value={height}
        onChange={this.handelheigthchange}
        >
        </input>
        <br>
        </br>
        <button
        onClick={this.calculatebmi}
        >
        Calculate Bmi
        </button>
        <h1>{bmi}</h1>
        <h1>{category}</h1>
      </div>
    )
  }

}
export default App;
```
