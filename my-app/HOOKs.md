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
# We can also write separate function instead of writing our function inside the curly brackets.
```jsx
// index.js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // Declaring new state variable
  const [count, setCount] = useState(0)
  const addOne = () => {
    let value = count + 1
    setCount(value)
  }
  const minusOne = () => {
    let value = count - 1
    setCount(value)
  }
  return (
    <div className='App'>
      <h1>{count} </h1>
      <button onClick={addOne}>Add One</button> <button onClick={minusOne}>Minus One</button>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```
# Fetching The api using Hooks
# USE EFFECT
using for if sending req and res to the server fetching api and more 
```jsx
import React, { useState, useEffect } from 'react';
const App=()=>{
    const [students,setStudents]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
        const Api='https://freetestapi.com/api/v1/students'
        fetch(Api)
        .then((response)=>{
            if(!response.ok){
                throw new Error("Network is not okay")
            }
            return response.json()
        })
        .then((data)=>{
            setStudents(data)
            setLoading(false)
        })
        .catch((error)=>{
            setError('Error in fetching')
            setLoading(false)
            console.error("Error in fetching the api",error)
        })
    })
    return(
        <div>
            <h1>Students Data</h1>
            {loading && <p>loading..</p>}
            {error && <p>Error...</p>}
            <ul>
                {students.map(student=>(
                    <li
                    key={student.id}
                    >
                    <strong>Name</strong>
                    {student.name}
                    <br>
                    </br>
                    {student.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default App
```
# Clock Timer using Hooks
```jsx
import React, { useState, useEffect } from 'react';
import './kaif.css';

const App = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timerID = null;

  useEffect(() => {
    if (isRunning) {
      timerID = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    return () => clearInterval(timerID);
  }, [isRunning]);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const stop = () => {
    if (isRunning) {
      clearInterval(timerID);
      setIsRunning(false);
    }
  };

  const reset = () => {
    stop();
    setElapsedTime(0);
  };

  return (
    <div className="App">
      <h1>Timer</h1>
      <div>Elapsed Time: {elapsedTime} seconds</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;

```
# Cat Dog Image changer using Hooks
```jsx
import React, { useState } from 'react';
import './Kaif.css';  // Import the CSS file

const App = () => {
  const [image, setImage] = useState('https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg');

  const changeAnimal = () => {
    let dogurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7zpG7Q2QGK9YGchMgfbXycRtDimjSCjk8w&s';
    let caturl = 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg';
    let newImage = image === caturl ? dogurl : caturl;
    setImage(newImage);
  };

  return (
    <div>
      <img
        src={image}
        alt='animal'
      />
      <br>
      </br>
      <button
        onClick={changeAnimal}
      >
        Change
      </button>
    </div>
  );
};

export default App;

```
