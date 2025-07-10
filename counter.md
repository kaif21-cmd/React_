```jsx
const { useState } = require("react");

const App = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    const increment = () => {
        if (count >= 20) {
            setMessage("The upper limit (20) is reached!");
            return;
        }
        setCount(count + 1);
        setMessage('');
    };

    const decrement = () => {
        if (count <= 0) {
            setMessage("Cannot go below 0!");
            return;
        }
        setCount(count - 1);
        setMessage('');
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <button onClick={increment}>+1</button>
            <button onClick={decrement} style={{ marginLeft: "10px" }}>-1</button>
            <h1>{count}</h1>
            {message && <p style={{ color: "red" }}>{message}</p>}
        </div>
    );
};

export default App;

```
