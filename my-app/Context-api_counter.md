```jsx
import React, { createContext, useState } from "react";
export const CounterContext=createContext()
export const CounterProvider=({children})=>{
  const [count,SetCount]=useState(0)
  const increment=()=>{
    SetCount(count+1)
  }
  const decrement=()=>{
    SetCount(count-1)
  }
  return(
    <CounterContext.Provider value={{count,increment,decrement}}>
     {children}
    </CounterContext.Provider>
  )
}

```
```jsx
import React, { useContext } from "react";
import { CounterContext, CounterProvider } from "./ThemeContext";

const Counter=()=>{
    const {count,increment,decrement}=useContext(CounterContext)
    return(
        <div>
<h1>{count}</h1>
        <button
        onClick={increment}
        >
        +1
        </button>
        <button
        onClick={decrement}
        >
        -1
        </button>
        </div>
        
    )
}
const App=()=>{
    return(
     <CounterProvider>
        <Counter />
    </CounterProvider>
    )
    
}
export default App;
```
