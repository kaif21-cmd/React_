```jsx
import React, { useState } from 'react';
const App=()=>{
    const [num1,setNum1]=useState('')
    const [num2,setNum2]=useState('')
    const [result,setResult]=useState(null)

    const handleChange=(e)=>{
        const{name,value}=e.target
        if(name==='num1') setNum1(value)
        else if(name==='num2') setNum2(value)
    };
    const addnumber=()=>{
        const sum=Number(num1)+Number(num2)
        setResult(sum)
    }
    return(
        <div>
            <input
            type='number'
            name='num1'
            value={num1}
            onChange={handleChange}
            placeholder='Enter the first number'
            >
            </input>
            <br>
            </br>
            <input
            type='number'
            name='num2'
            value={num2}
            onChange={handleChange}
            placeholder="Enter second number"
            >
            </input>
            <button
            onClick={addnumber}
            >
            ADD
            </button>
            <h1>{result}</h1>
        </div>
    )
}
export default App;
```
