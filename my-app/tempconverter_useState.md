```jsx
import React, { useState } from 'react';

const App = () => {
  const [tempc, setTempc] = useState('');
  const [tempf, setTempf] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tempc') setTempc(value);
    if (name === 'tempf') setTempf(value);
  };

  const convertToFahrenheit = () => {
    if (tempc === '') {
      setResult('Please enter Celsius temperature');
      return;
    }
    const f = (Number(tempc) * 9 / 5) + 32;
    setResult(`${tempc}°C = ${f.toFixed(2)}°F`);
  };

  const convertToCelsius = () => {
    if (tempf === '') {
      setResult('Please enter Fahrenheit temperature');
      return;
    }
    const c = (Number(tempf) - 32) * 5 / 9;
    setResult(`${tempf}°F = ${c.toFixed(2)}°C`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>🌡️ Temperature Converter</h1>

      <div>
        <label>Enter Celsius:</label><br />
        <input
          type="number"
          name="tempc"
          value={tempc}
          placeholder="°C"
          onChange={handleChange}
        />
        <button onClick={convertToFahrenheit}>Convert to °F</button>
      </div>

      <br />

      <div>
        <label>Enter Fahrenheit:</label><br />
        <input
          type="number"
          name="tempf"
          value={tempf}
          placeholder="°F"
          onChange={handleChange}
        />
        <button onClick={convertToCelsius}>Convert to °C</button>
      </div>

      <br />
      <h2>{result}</h2>
    </div>
  );
};

export default App;

```
