```jsx
const { useEffect,useState } = require("react")

const Counter=()=>{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    useEffect(()=>{
        console.log(`count has been updated ${count}`)
    },[count])
    return(
        <div>
            <h1>count: {count}</h1>
            <button
            onClick={increment}
            disabled={count===10}
            >
            +1
            </button>
            <button
            onClick={decrement}
            disabled={count===0}
            >
            -1
            </button>
        </div>
    )
}
export default Counter
```
