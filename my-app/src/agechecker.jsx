import { useState } from "react";
import './App.css'

const Age_checker = () => {
  const [age, setAge] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const checkAge = () => {
    if (age >= 18) {
      setResult(`Congratulations! You are ${age} and eligible to vote.`);
    } else {
      setResult(`Sorry, you are ${age}. You are not eligible to vote.`);
    }
  };

  return (
    <div>
      <h1>{result}</h1>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={checkAge}>
        Check Age
      </button>

      <h3>{result}</h3>
    </div>
  );
};

export default Age_checker
