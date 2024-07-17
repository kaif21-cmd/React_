# HOOKS
Hooks are a new addition in React 16.8. They allow you use state, life cycle methods and other React features without writing a class component. If we are using hooks we can have only a functional component in the entire application
Basic Hooks
The basic hooks are:

useState
useEffect
useContext

# USE STATE
State Hook
Using hooks we can access state without writing a class based component. Let's use the same example we used for class based components on day 8.

To use hooks, first we should import the useState hooks from react. The useState is a function which takes one argument and returns a current state and functions that lets you update it.
```jsx
import React, { useState } from 'react'
const App=()=>{
    const [count,setcount]=useState(0)
    const addone=()=>{
        let value=count+1
        setcount(value)
    }
    const minusone=()=>{
        let value=count-1
        setcount(value)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button
            onClick={addone}
            >
            +
            </button>
            <button
            onClick={minusone}
            >
            -
            </button>
        </div>
    )
}
export default App
```
