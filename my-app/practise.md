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

### E-commerce company, "EasyShop", has developed a React-based web application for its users to browse and purchase products online. The application contains a component named "ProductCard" that displays the product details, such as product name, price, and quantity. The "ProductCard" component is re-rendered whenever the user updates the quantity of the product. However, the development team has observed that the application is experiencing performance issues due to unnecessary re-renders of the "ProductCard" component. Your task is to suggest an approach to optimize the re-rendering of the "ProductCard" component using React's component lifecycle methods. Consider the scenario where the user updates the quantity of the product and the component needs to be re-rendered only when the quantity changes. How would you utilize React's component lifecycle methods to achieve this optimization?

```jsx
// Step 1: Engagement calculator
function calculateEngagement(likes, comments, shares) {
  return likes + comments + shares;
}

// Step 2: Get top 5 engaging posts
function getTopEngagingPosts(postData) {
  return postData
    .map(post => ({
      ...post,
      engagement: calculateEngagement(post.likes, post.comments, post.shares)
    }))
    .sort((a, b) => b.engagement - a.engagement)
    .slice(0, 5)
    .map(post => post.id);
}

// Sample Data
const postData = [
  { id: 1, likes: 100, comments: 20, shares: 5 },
  { id: 2, likes: 50, comments: 10, shares: 2 },
  { id: 3, likes: 200, comments: 30, shares: 10 },
  { id: 4, likes: 80, comments: 15, shares: 3 },
  { id: 5, likes: 150, comments: 25, shares: 7 },
  { id: 6, likes: 120, comments: 18, shares: 4 },
  { id: 7, likes: 90, comments: 12, shares: 2 },
  { id: 8, likes: 180, comments: 28, shares: 9 },
  { id: 9, likes: 130, comments: 22, shares: 6 },
  { id: 10, likes: 160, comments: 26, shares: 8 }
];

// Call the function
const topPosts = getTopEngagingPosts(postData);
console.log(topPosts); // Output: [3, 8, 10, 5, 9]

```

# Sorting by price name rating 

```jsx
import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10.99, rating: 4 },
    { id: 2, name: 'Product 2', price: 5.99, rating: 3 },
    { id: 3, name: 'Product 3', price: 7.99, rating: 5 },
    // ...
  ]);

  const [sortOption,setsortOption]=useState('price');
  useEffect(()=>{
    let sortedProducts=[...products]
    if(sortOption==='price'){
        sortedProducts.sort((a,b)=>a.price-b.price)
    }
    else if(sortOption==='name'){
        sortedProducts.sort((a,b)=>a.name.localeCompare(b.name))
    }else if(sortOption==='rating'){
        sortedProducts.sort((a,b)=>b.rating-a.rating)
    }
    setProducts(sortedProducts)
  },[sortOption,products])
return(
    <div>
        <select
        value={sortOption}
        onChange={(e)=>setsortOption(e.target.value)}
        >
        <option
        value="price">sort by price
        </option>
        <option
        value="name">
        sort by name
        </option>
         <option
        value="rating">
        sort by rating
        </option>
        </select>
        <ul>
            {products.map((products)=>(
                <li key={products.id}>
                    {products.name} (${products.price})-{products.rating/5}
                </li>
            ))}
        </ul>
    </div>
)
}
export default ProductList;

```
# Toggle Button
```jsx
import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(true); // default state is "on"

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <button
      id="toggle"
      onClick={handleToggle}
      style={{
        backgroundColor: isOn ? "black" : "lightgray",
        color: isOn ? "white" : "black",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      {isOn ? "on" : "off"}
    </button>
  );
}

export default ToggleButton;

```
# Toogle theme
```jsx
const { useState } = require("react")

const App=()=>{
    const [theme,setTheme]=useState('light')

    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"))
    }
        return (
    <div
      style={{
        height: "100vh",
        transition: "0.3s ease-in",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
    )
}
export default App;
```
# Toogle theme by using the usetheme
```jsx
import React, { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        height: "100vh",
        transition: "0.3s ease-in",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;

```
# Paragraph Toogler
```jsx
const { useState } = require("react")

const App=()=>{
    const [isVisible,setisVisible]=useState(true)

    const toggleparagraph=()=>{
        setisVisible((prev)=>!prev)
    }
    return(
        <div>
            <button
            onClick={toggleparagraph}
            >
            {isVisible ? "hide paragraph" :'showpargraph'}
            </button>

            {isVisible &&(
                <p>
                    this is paragraph
                </p>
            )}
        </div>
    )
}
export default App;
```
# Bill Amount Calculator 
```jsx
import { useState } from "react";

const App = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "billAmount") setBillAmount(Number(value));
    if (name === "tippercent") setTipPercent(Number(value));
  };

  const calculateAmount = () => {
    const total = billAmount + (billAmount * tipPercent) / 100;
    setTotalAmount(total);
  };

  return (
    <div>
      <input
        type="number"
        name="billAmount"
        id="billAmount"
        placeholder="Enter Bill Amount"
        onChange={handleChange}
      />

      <input
        type="number"
        id="tippercent"
        name="tippercent"
        placeholder="Enter Tip %"
        onChange={handleChange}
      />

      <button onClick={calculateAmount}>Total Amount</button>

      <h2>{totalAmount}</h2>
    </div>
  );
};

export default App;

```
# Polling System.
```jsx
import { useState } from "react";

function PollComponent() {
  const [votes, setVotes] = useState([0, 0, 0, 0]); // 4 options with initial votes = 0
  const question = "Which is your favorite programming language?";
  const options = ["JavaScript", "Python", "C++", "Java"];

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1; // increase vote count
    setVotes(newVotes);
  };

  return (
    <div>
      {/* Challenge 1: Poll Question */}
      <h4 id="question">{question}</h4>

      {/* Challenge 2, 3 & 4: Voting Options with vote counts */}
      {options.map((option, index) => (
        <button
          key={index}
          className="option"
          onClick={() => handleVote(index)}
        >
          <span>{option}</span> <span>{votes[index]}</span>
        </button>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <PollComponent />
    </div>
  );
}

```

# Simple Interest Calculator
```jsx
import { useState, useEffect } from "react";

const App = () => {
  // Default values
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(7);
  const [time, setTime] = useState(5);
  const [simpleInterest, setSimpleInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculation runs whenever inputs change
  useEffect(() => {
    const si = (principal * rate * time) / 100;
    setSimpleInterest(si.toFixed(2));
    setTotalAmount((Number(principal) + si).toFixed(2));
  }, [principal, rate, time]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Simple Interest Calculator
        </h1>

        {/* Inputs */}
        <label className="block mb-3">
          Principal Amount:
          <input
            id="principal"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </label>

        <label className="block mb-3">
          Interest Rate (% per year):
          <input
            id="rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </label>

        <label className="block mb-3">
          Time (in years):
          <input
            id="time"
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </label>

        {/* Outputs */}
        <div
          id="simpleInterest"
          className="mt-4 p-3 bg-blue-50 rounded-md text-lg font-medium text-blue-700"
        >
          Simple Interest: ₹{simpleInterest}
        </div>

        <div
          id="totalAmount"
          className="mt-2 p-3 bg-green-50 rounded-md text-lg font-medium text-green-700"
        >
          Total Amount: ₹{totalAmount}
        </div>
      </div>
    </div>
  );
};

export default App;

```

# Current Clock Timer 
```jsx
import { useState, useEffect } from "react";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  // Format day
  const day = currentDate.toLocaleDateString("en-US", { weekday: "long" });

  // Format date: Month DD, YYYY
  const date = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  // Format time: HH:MM:SS (24-hour format)
  const time = currentDate
    .toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center text-xl">
      <div id="day" className="mb-2 font-bold text-blue-600">
        {day}
      </div>
      <div id="date" className="mb-2 text-gray-700">
        {date}
      </div>
      <div id="time" className="text-2xl font-mono text-green-600">
        {time}
      </div>
    </div>
  );
};

export default App;
```
# Form Validation 
```jsx
import React, { useState } from 'react'
import styled from 'styled-components'

const SignUpForm = () => {
	const [formValues, setFormValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const [errors, setErrors] = useState({})
	const [submitted, setSubmitted] = useState(false)

	const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormValues((prev) => ({ ...prev, [name]: value }))
	}

	const validate = () => {
		const newErrors = {}

		if (!formValues.firstName.trim()) {
			newErrors.firstName = 'First name cannot be empty'
		}
		if (!formValues.lastName.trim()) {
			newErrors.lastName = 'Last name cannot be empty'
		}
		if (!emailRegex.test(formValues.email)) {
			newErrors.email = 'Invalid email address'
		}
		if (formValues.password.length < 8) {
			newErrors.password = 'Password must be greater than 7 characters'
		}
		if (formValues.password !== formValues.confirmPassword) {
			newErrors.confirmPassword = 'Passwords do not match'
		}

		return newErrors
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted(true)
		const validationErrors = validate()
		setErrors(validationErrors)

		if (Object.keys(validationErrors).length === 0) {
			console.log('Form submitted successfully')
		}
	}

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<input
					data-testid="first-name-id"
					type="text"
					name="firstName"
					placeholder="First Name"
					value={formValues.firstName}
					onChange={handleChange}
				/>
				<p data-testid="first-name-error-id" className="error">
					{submitted && errors.firstName}
				</p>

				<input
					data-testid="last-name-id"
					type="text"
					name="lastName"
					placeholder="Last Name"
					value={formValues.lastName}
					onChange={handleChange}
				/>
				<p data-testid="last-name-error-id" className="error">
					{submitted && errors.lastName}
				</p>

				<input
					data-testid="email-id"
					type="email"
					name="email"
					placeholder="Email Address"
					value={formValues.email}
					onChange={handleChange}
				/>
				<p data-testid="email-error-id" className="error">
					{submitted && errors.email}
				</p>

				<input
					data-testid="password-id"
					type="password"
					name="password"
					placeholder="Password"
					value={formValues.password}
					onChange={handleChange}
				/>
				<p data-testid="password-error-id" className="error">
					{submitted && errors.password}
				</p>

				<input
					data-testid="confirm-password-id"
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					value={formValues.confirmPassword}
					onChange={handleChange}
				/>
				<p data-testid="confirm-password-error-id" className="error">
					{submitted && errors.confirmPassword}
				</p>

				<button type="submit">Sign Up</button>
			</form>
		</Wrapper>
	)
}

export default SignUpForm

const Wrapper = styled.div`
	margin-top: 24px;
	font-family: sans-serif;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	input {
		padding: 8px 12px;
		font-size: 18px;
		margin-bottom: 6px;
		width: clamp(200px, 40%, 400px);
	}

	button {
		padding: 10px 20px;
		font-size: 18px;
		border: none;
		border-radius: 4px;
		background-color: #333;
		color: #fff;
		cursor: pointer;
		margin-top: 24px;

		&:hover {
			opacity: 0.8;
		}
	}

	.error {
		margin: 0 0 12px 0;
		color: red;
		font-size: 14px;
	}
`

```

# Choose the Random Number 

```jsx
const { useState } = require("react")

const App = () => {
  const [startRange, setStartRange] = useState("")
  const [endRange, setEndRange] = useState("")
  const [randomNumber, setRandomNumber] = useState("")

  const generateRandom = () => {
    const Start = Number(startRange)
    const End = Number(endRange)

    // Validation
    if (
      isNaN(Start) || 
      isNaN(End) || 
      startRange === "" || 
      endRange === ""
    ) {
      setRandomNumber("Invalid Input")
      return
    }

    if (Start > End) {
      setRandomNumber("Invalid Input")
      return
    }

    // Random Number Generation (inclusive)
    const num = Math.floor(Math.random() * (End - Start + 1)) + Start
    setRandomNumber(num)
  }

  return (
    <div>
      <input
        type="number"
        id="startRange"
        value={startRange}
        onChange={(e) => setStartRange(e.target.value)}
        placeholder="Start Range"
      />

      <input
        type="number"
        id="endRange"
        value={endRange}
        onChange={(e) => setEndRange(e.target.value)}
        placeholder="End Range"
      />

      <br /><br />

      <button id="generate" onClick={generateRandom}>
        Generate
      </button>

      <div id="randomNumber">
        <h1>{randomNumber}</h1>
      </div>
    </div>
  )
}

export default App

```

