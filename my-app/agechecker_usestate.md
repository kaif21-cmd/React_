```jsx
import React, { useState } from 'react';
const App=()=>{
    const [age,setAge]=useState('')
    const [result,setResult]=useState('')

    const handelChange=(e)=>{
    setAge(e.target.value)
    }
    const Age_Checker=()=>{
        let n=Number(age)
        if(n>=18){
            setResult(`Congrulationn you are now ${n} & you are eligible for vote now`)
        }
        else{
           setResult(`sorry you are not eligible for vote right now`)
        }
    }
    return(
        <div>
            <input
            type='number'
            name='age'
            placeholder='Enter the age'
            onChange={handelChange}
            value={age}
            >
            </input>
            <button
            onClick={Age_Checker}
            >
            check now
            </button>
            <h1>{result}</h1>
        </div>
    )
}
export default App;
```
