import { useState } from 'react'
import './App.css'
import "./Palindrome.css";
// import Age_checker from './agechecker'
import Palindrome from './Palindrome';

const App = () => {
  return (
    <div>
      <h1>Welcome</h1>
      {/* <Age_checker/> */}
      <Palindrome />
    </div>
  );
};

export default App;















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)

//   const [count,setCount]=useState(0)

//   const Increment=()=>{
//     setCount(count+1)
//   }
//   const decrement=()=>{
//     setCount(count-1)
//   }
  
//   return (
//     <>
//       <div>
//         {/* <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a> */}
//       </div>
//       {/* <h1>Vite + React</h1> */}
//       <div className="card">
//         {/* <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}s
//         </button> */}
//         <h1>{count}</h1>

//         <button
//         onClick={Increment}
//         >
//         +1
//         </button>

//         <button
//         onClick={decrement}
//         >
//         -1
//         </button>
//         {/* <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p> */}
//       </div>
//       {/* <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App



// const App = () => {
//   const [count, setCount] = useState(0)
//   const [msg, setMsg] = useState('')
//   const [num, setNum] = useState('')
//   const [result, setResult] = useState('')
//   const [name,setName]=useState('')

//   const handleChange = (e) => {
//     setNum(e.target.value)
//   }

//   const checkEvenOdd = () => {
//     if (num === '') {
//       setResult('Please enter a number')
//       return
//     }

//     if (Number(num) % 2 === 0) {
//       setResult(`The number ${num} is EVEN`)
//     } else {
//       setResult(`The number ${num} is ODD`)
//     }
//   }

//   const increment = () => {
//     if (count >= 10) {
//       setMsg('is se upar ni jayega bhai')
//       return
//     }
//     setMsg('')
//     setCount(count + 1)
//   }

//   const decrement = () => {
//     if (count <= 0) {
//       setMsg('ab is se niche ni jayega')
//       return
//     }
//     setMsg('')
//     setCount(count - 1)
//   }

//   const resetz = () => {
//     setCount(0)
//     setMsg('')
//   }

//   const top = () => {
//     setCount(100)
//     setMsg('')
//   }
//   const Myname=()=>{
//     setName("Rehan")
//   }

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <p>{msg}</p>
//       <p>{name}</p>
//       <p>{result}</p>

//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={resetz}>ResetKaif</button>
//       <button onClick={top}>Top</button>
//       <button onClick={Myname}>Click</button>

//       <br /><br />

//       <input
//         type="number"
//         value={num}
//         onChange={handleChange}
//         placeholder="Enter the number"
//       />

//       <button onClick={checkEvenOdd}>
//         Check Even / Odd
//       </button>
//     </div>
//   )
// }

// export default App

