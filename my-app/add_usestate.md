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
```jsx
import React, { useState } from 'react';

const App = () => {
  const [numbers, setNumbers] = useState({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
    num5: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNumbers((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const addNumbers = () => {
    const sum =
      Number(numbers.num1) +
      Number(numbers.num2) +
      Number(numbers.num3) +
      Number(numbers.num4) +
      Number(numbers.num5);
    setResult(sum);
  };

  return (
    <div>
      <input
        type='number'
        name='num1'
        value={numbers.num1}
        onChange={handleChange}
        placeholder='Enter number 1'
      />
      <br />
      <input
        type='number'
        name='num2'
        value={numbers.num2}
        onChange={handleChange}
        placeholder='Enter number 2'
      />
      <br />
      <input
        type='number'
        name='num3'
        value={numbers.num3}
        onChange={handleChange}
        placeholder='Enter number 3'
      />
      <br />
      <input
        type='number'
        name='num4'
        value={numbers.num4}
        onChange={handleChange}
        placeholder='Enter number 4'
      />
      <br />
      <input
        type='number'
        name='num5'
        value={numbers.num5}
        onChange={handleChange}
        placeholder='Enter number 5'
      />
      <br />
      <button onClick={addNumbers}>ADD</button>
      <h1>{result !== null && `Sum: ${result}`}</h1>
    </div>
  );
};

export default App;

```
