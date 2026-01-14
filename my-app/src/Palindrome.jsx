import { useState } from "react";
import "./Palindrome.css";

const Palindrome = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const checking_palindrome = () => {
    const reverse = num.split("").reverse().join("");
    if (num === reverse) {
      setResult(` ${num} is a Palindrome`);
    } else {
      setResult(`${num} is NOT a Palindrome`);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Palindrome Checker</h2>

        <input
          type="text"
          placeholder="Enter number"
          value={num}
          onChange={handleChange}
        />

        <button onClick={checking_palindrome}>
          Check
        </button>

        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default Palindrome;
