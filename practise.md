# Day Changer
```jsx
import React, { useState } from "react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const App = () => {
  const [index, setIndex] = useState(0);

  const Increment = () => {
    setIndex((prevIndex) => (prevIndex + 1) % days.length);
  };

  const decrement = () => {
    setIndex((prevIndex) => (prevIndex - 1 + days.length) % days.length);
  };

  return (
    <div>
      <h1>{days[index]}</h1>
      <button onClick={Increment}>Agla Din</button>
      <button onClick={decrement}>Pichla Din</button>
    </div>
  );
};

export default App;

```
