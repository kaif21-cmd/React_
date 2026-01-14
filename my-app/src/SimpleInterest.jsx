import { useState } from "react";
import "./SimpleInterest.css";

const SimpleInterest = () => {
  const [form, setForm] = useState({
    principle: "",
    rate: "",
    time: "",
  });

  const [result, setResult] = useState("");

  // ✅ ONE onChange handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const Calculate_si = () => {
    const { principle, rate, time } = form;
    const si =
      (Number(principle) * Number(rate) * Number(time)) / 100;

    setResult(`The Simple Interest is ₹${si}`);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Simple Interest Calculator</h2>

        <input
          type="number"
          name="principle"
          placeholder="Enter Principle"
          value={form.principle}
          onChange={handleChange}
        />

        <input
          type="number"
          name="rate"
          placeholder="Enter Rate"
          value={form.rate}
          onChange={handleChange}
        />

        <input
          type="number"
          name="time"
          placeholder="Enter Time"
          value={form.time}
          onChange={handleChange}
        />

        <button onClick={Calculate_si}>
          Calculate SI
        </button>

        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default SimpleInterest;
