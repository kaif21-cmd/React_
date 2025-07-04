```jsx
import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const factorial = () => {
    let n = Number(num);
    if (n < 0) {
      setResult('Factorial is not defined for negative numbers');
      return;
    }
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    setResult(`Factorial of ${n} is ${fact}`);
  };

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <button onClick={factorial}>Calculate Factorial</button>
      <p>{result}</p>
    </div>
  );
};

export default App;

```
