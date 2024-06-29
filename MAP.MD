#MAP IN REACT
An array is the most frequently used data structure to handle many kinds of problems. In React, we use map to modify an array to list of JSX by adding a certain HTML elements to each element of an array.
#1
import React from "react";
const Numbers=({numbers})=>{
  const list=numbers.map((numbers)=><li>{numbers}</li>)
  return list
} 
const App=()=>{
  const numbers=[1,2,3,4,5]
  return(
    <div className="container">
     <Numbers numbers={numbers} />
    </div>
  )
}
export default App
#2 Mappin Array of object
import React from 'react'
const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))
  return <div>{countryList}</div>
}
const App = () => (
  <div className='container'>
    <div>
      <h1>Countries List</h1>
      <Countries countries={countries} />
    </div>
  </div>
)
export default App
