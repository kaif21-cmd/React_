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
# Backgroud changer 
```jsx
import React, { useState } from "react";

const days = [
  { name: "Monday", color: "#f8b400" },
  { name: "Tuesday", color: "#00b894" },
  { name: "Wednesday", color: "#0984e3" },
  { name: "Thursday", color: "#6c5ce7" },
  { name: "Friday", color: "#fd79a8" },
  { name: "Saturday", color: "#e17055" },
  { name: "Sunday", color: "#d63031" },
];

const App = () => {
  const [index, setIndex] = useState(0);

  const Increment = () => {
    setIndex((prev) => (prev + 1) % days.length);
  };

  const decrement = () => {
    setIndex((prev) => (prev - 1 + days.length) % days.length);
  };

  const currentDay = days[index];

  return (
    <div
      style={{
        backgroundColor: currentDay.color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "Arial",
        transition: "background-color 0.5s ease",
      }}
    >
      <h1>{currentDay.name}</h1>
      <div>
        <button onClick={Increment} style={buttonStyle}>
          Agla Din
        </button>
        <button onClick={decrement} style={buttonStyle}>
          Pichla Din
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "0 10px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
};

export default App;

```

# Name changer 
```jsx
import React, { useState } from "react";

const Names = [
  "kaif",
  "shahrukh",
  "zaid",
  "zaeem",
];

const App = () => {
  const [index, setIndex] = useState(0);

  const Increment = () => {
    setIndex((prevIndex) => (prevIndex + 1) % Names.length);
  };

  const Decrement = () => {
    setIndex((prevIndex) => (prevIndex - 1 + Names.length) % Names.length);
  };

  return (
    <div>
      <h1>{Names[index]}</h1>
      <button onClick={Increment}>Ageee</button>
      <button onClick={Decrement}>Picheee</button>
    </div>
  );
};

export default App;

```
# API Changer
```jsx
import React, { useState } from "react";

const people = [
  {
    id: 1,
    info: {
      name: "Kaif",
      email: "kaif@example.com",
      photo: "https://via.placeholder.com/150/3498db/ffffff?text=Kaif",
    },
  },
  {
    id: 2,
    info: {
      name: "Shahrukh",
      email: "shahrukh@example.com",
      photo: "https://via.placeholder.com/150/2ecc71/ffffff?text=SRK",
    },
  },
  {
    id: 3,
    info: {
      name: "Zaid",
      email: "zaid@example.com",
      photo: "https://via.placeholder.com/150/e74c3c/ffffff?text=Zaid",
    },
  },
  {
    id: 4,
    info: {
      name: "Zaeem",
      email: "zaeem@example.com",
      photo: "https://via.placeholder.com/150/9b59b6/ffffff?text=Zaeem",
    },
  },
];

const App = () => {
  const [index, setIndex] = useState(0);

  const Increment = () => {
    setIndex((prev) => (prev + 1) % people.length);
  };

  const Decrement = () => {
    setIndex((prev) => (prev - 1 + people.length) % people.length);
  };

  const current = people[index];

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <img
        src={current.info.photo}
        alt={current.info.name}
        style={{ borderRadius: "50%", width: "150px", marginBottom: "10px" }}
      />
      <h1>ID: {current.id}</h1>
      <h2>Name: {current.info.name}</h2>
      <p>Email: {current.info.email}</p>

      <button onClick={Decrement} style={btnStyle}>
        👈 Pichle
      </button>
      <button onClick={Increment} style={btnStyle}>
        Agle 👉
      </button>
    </div>
  );
};

const btnStyle = {
  padding: "10px 15px",
  margin: "10px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#3498db",
  color: "#fff",
};

export default App;

```
```jsx
const { useState } = require("react")

const App=()=>{
  const [validate,setValidate]=useState('')
  const [message,setMessage]=useState('')

    const validate_paswrd=(value)=>{
    const minlength=validate.length>=8;
    const hasUpper=/[A-Z]/.test(validate)
    const hasLower=/[a-z]/.test(validate)
    const hasNumber=/[0-9]/.test(validate)
    const hasSpecial=/[!@#$%^&*]/.test(validate)

    if(!minlength) return setMessage('paswword must include at least 8 charcater')
    if(!hasLower) return setMessage('password must include an uppercase letter')
    if(!hasUpper) return setMessage('password must include upper')
    if(!hasNumber) return setMessage('pasword must include number')
    if(!hasSpecial) return setMessage('must include special character')
    setMessage ('Pasword is valid')
  }
  const handelChange=(e)=>{
    const value=e.target.value
    setValidate(value)
    validate_paswrd(value)
  }
  return(
    <div>
      <h1>Password Validator</h1>
      <input
      type="password"
      value={validate}
      onChange={handelChange}
      placeholder="Enter the password"
      >
      </input>
      <p>{message}</p>
    </div>
  )
}
export default App;
```
# Jokes API
```jsx
import React, { useState, useEffect } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [currentIndex, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/ten") // Example API
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error while fetching");
        }
        return response.json();
      })
      .then((data) => {
        setJokes(data);
        setLoading(false);
        setIndex(0);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % jokes.length);
  };

  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + jokes.length) % jokes.length);
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Joke #{currentIndex + 1}</h2>
      <h3>{jokes[currentIndex]?.setup}</h3>
      <p>{jokes[currentIndex]?.punchline}</p>

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default App;

```

# Codedamn  EMI calculator
```jsx
import React, { useState } from "react";

const App = () => {
  const [totalCost, setTotalCost] = useState('');
  const [numberOfIntervals, setNumberOfIntervals] = useState('');
  const [result, setResult] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "totalCost") setTotalCost(value);
    if (name === "numberOfIntervals") setNumberOfIntervals(value);
  };

  // Perform EMI calculation
  const calculateEMI = () => {
    const total = parseFloat(totalCost);
    const intervals = parseInt(numberOfIntervals);

    if (!isNaN(total) && !isNaN(intervals) && intervals > 0) {
      const emi = total / intervals;
      setResult(emi.toFixed(2)); // 2 decimal places
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>EMI Calculator</h2>

      {/* Challenge 1: Input Fields */}
      <input
        type="number"
        id="totalCost"
        name="totalCost"
        placeholder="Total Loan Amount"
        value={totalCost}
        onChange={handleChange}
      />
      <br /><br />
      <input
        type="number"
        id="numberOfIntervals"
        name="numberOfIntervals"
        placeholder="Number of Months"
        value={numberOfIntervals}
        onChange={handleChange}
      />
      <br /><br />

      {/* Challenge 1: Button */}
      <button id="calculate" onClick={calculateEMI}>
        Calculate
      </button>

      <br /><br />

      {/* Challenge 2: Output */}
      <div id="output">
        {result && <strong>Monthly EMI: ₹{result}</strong>}
      </div>
    </div>
  );
};

export default App
```

# Showing Data to tables
```jsx
import { useState, useEffect } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch and append posts
  const fetchPosts = async (pageNum) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
      );
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]); // Append new data
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Initial load
  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  // Handle Next button
  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Paginated Posts</h2>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(({ id, title, body }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button id="next" onClick={handleNext} style={{ marginTop: "20px" }}>
        Next Items
      </button>
    </div>
  );
}

```

# Another way
```jsx
import { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetching error");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message || "Failed to load");
      });
  }, [page]); // ✅ Now runs on every page change

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handelPrevious=()=>{
    setPage((prev)=>prev-1)
  }
  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts (Page {page})</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID:</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(({ id, title, body }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br />
      <button onClick={handleNext}>Next Items</button>
    <button onClick={handelPrevious}>prev Items</button>
    </div>
  );
};

export default App;

```

# Student management Dashboard

```jsx
import React, { useState, useEffect } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [students] = useState([
    {
      id: 1,
      name: "Ayesha Khan",
      age: 20,
      branch: "Computer Science",
      email: "ayesha.khan@example.com",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      status: "Pass",
    },
    {
      id: 2,
      name: "Rohan Mehta",
      age: 21,
      branch: "Mechanical Engineering",
      email: "rohan.mehta@example.com",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      status: "Fail",
    },
    {
      id: 3,
      name: "Zoya Sheikh",
      age: 19,
      branch: "Electrical Engineering",
      email: "zoya.sheikh@example.com",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      status: "Pass",
    },
    {
      id: 4,
      name: "Adnan Qureshi",
      age: 22,
      branch: "IT",
      email: "adnan.q@example.com",
      photo: "https://randomuser.me/api/portraits/men/85.jpg",
      status: "Fail",
    },
  ]);

  const filteredStudents = students.filter((student) => {
    const matchesSearch = `${student.name} ${student.branch} ${student.email}`
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Inject responsive styles once on mount
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media (max-width: 768px) {
        .table-container {
          overflow-x: auto;
        }
        table {
          width: 100%;
        }
        input, select {
          width: 100% !important;
          margin-bottom: 10px;
        }
        td img {
          width: 40px !important;
          height: 40px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Segoe UI, sans-serif",
    },
    input: {
      padding: "8px",
      marginRight: "10px",
      width: "250px",
    },
    select: {
      padding: "8px",
      marginRight: "10px",
      width: "150px",
    },
    tableContainer: {
      overflowX: "auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
      minWidth: "600px",
    },
    th: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px",
      border: "1px solid #ddd",
    },
    td: {
      padding: "10px",
      border: "1px solid #ddd",
      textAlign: "center",
    },
    img: {
      borderRadius: "50%",
      width: "50px",
      height: "50px",
    },
    statusPass: {
      color: "green",
      fontWeight: "bold",
    },
    statusFail: {
      color: "red",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h2>🎓 Student Dashboard</h2>

      <div>
        <input
          type="text"
          placeholder="Search by name, branch or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={styles.select}
        >
          <option value="All">All</option>
          <option value="Pass">Pass</option>
          <option value="Fail">Fail</option>
        </select>
      </div>

      <div className="table-container" style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Photo</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Age</th>
              <th style={styles.th}>Branch</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td style={styles.td}>
                    <img src={student.photo} alt={student.name} style={styles.img} />
                  </td>
                  <td style={styles.td}>{student.name}</td>
                  <td style={styles.td}>{student.age}</td>
                  <td style={styles.td}>{student.branch}</td>
                  <td style={styles.td}>{student.email}</td>
                  <td
                    style={{
                      ...styles.td,
                      ...(student.status === "Pass"
                        ? styles.statusPass
                        : styles.statusFail),
                    }}
                  >
                    {student.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={styles.td}>
                  No matching students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

```

# Dynamic Counter

```jsx
import React, { useState, useEffect } from 'react';

const CountUpTimer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && count < 10) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    if (count === 10) {
      clearInterval(timer);
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, count]);

  const startCountUp = () => {
    setCount(0);        // Reset counter
    setIsRunning(true); // Start timer
  };

  return (
    <div style={styles.container}>
      <h1>{count}</h1>
      <button onClick={startCountUp} style={styles.button}>Start Timer</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    marginTop: '10px',
  },
};

export default CountUpTimer;


```
