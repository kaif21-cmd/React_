# States in React Counter Application
```jsx

import React ,{useState} from 'react'
const Counter=()=>{
  const [count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
  }
  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ marginRight: '10px' }}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  )
}
export default Counter
```
