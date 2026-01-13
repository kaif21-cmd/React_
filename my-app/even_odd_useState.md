```jsx
import React, { useState } from 'react';

const EvenOdd = () => {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');

  const handelChange = (e) => {
    setNum(e.target.value);  // Just setNum directly, no need for `name`
  };

  const checkeven_odd = () => {
    if (Number(num) % 2 === 0) {
      setResult(`The number ${num} is even`);
    } else {
      setResult(`The number ${num} is odd`);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={handelChange}
        placeholder="Enter a number"
      />
      <button onClick={checkeven_odd}>
        Check Even/Odd
      </button>
      <p>{result}</p>
    </div>
  );
};

export default EvenOdd;

```
