# Routing 
if want go from one page to another page
# Home Component
```jsx

import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            {/* Add additional content for Home page */}
        </div>
    );
};

export default Home;

```
# About Component
```jsx
// AboutPage.js
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            {/* Add additional content for About page */}
        </div>
    );
};

export default AboutPage;

```
# App.js Main Routing Page

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Check the correct path for Home component
import AboutPage from './Aboutpage'; // Check the correct path for AboutPage component


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

```
# Navlinks Navbar
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home'; // Check the correct path for Home component
import AboutPage from './Aboutpage'; // Check the correct path for AboutPage component


function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <NavLink
              to='/home'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

```
# What is Redirect ? 
This setup will ensure that when a user lands on the root URL, they are redirected to the /home route automatically.
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './Home'; // Check the correct path for Home component
import Aboutpage from './Aboutpage'; // Check the correct path for AboutPage component

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<Aboutpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

```
# Dynamic Routing 
# UserProfile Page
```jsx
import React from 'react';

const UserProfile = ({ userId }) => {
  // Example user data fetch or usage based on userId
  // Replace with actual data fetching logic as per your application
  const userData = {
    id: userId,
    name: 'John Doe', // Example name
    email: 'john.doe@example.com', // Example email
    // Add more fields as needed
  };

  return (
    <div>
      <h2>User Profile: {userData.name}</h2>
      <p><strong>User ID:</strong> {userData.id}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      {/* Add more details or components as per your application */}
    </div>
  );
};

export default UserProfile;


```
# Main page 
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home'; // Assuming Home component is defined
import Aboutpage from './Aboutpage'; // Assuming AboutPage component is defined
import UserProfile from './UserProfile'; // Assuming UserProfile component is defined

// Example list of users
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          {/* Dynamically generated NavLinks for user profiles */}
          {users.map(user => (
            <li key={user.id}>
              <NavLink to={`/profile/${user.id}`}>{user.name}'s Profile</NavLink>
            </li>
          ))}
        </ul>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<Aboutpage />} />
          {/* Dynamically generated Routes for user profiles */}
          {users.map(user => (
            <Route key={user.id} path={`/profile/${user.id}`} element={<UserProfile userId={user.id} />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

```
# More Example Dynamic Routing 
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// Example array of challenges or courses
const challenges = [
  {
    name: '30 Days Of Python',
    description: '30 Days of Python challenge is a step by step guide to learn Python in 30 days.',
    status: 'completed',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '20 Nov 2019 - 20 Dec 2019',
    slug: 'python',
    url: 'https://github.com/Asabeneh/30-Days-Of-Python',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 Days Of JavaScript',
    description: '30 Days of JavaScript challenge is a step by step guide to learn JavaScript in 30 days.',
    status: 'completed',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '1 Jan 2020 - 30 Jan 2020',
    slug: 'javascript',
    url: 'https://github.com/Asabeneh/30-Days-Of-JavaScript',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  // Add more challenges as needed
];

const ChallengeDetail = ({ challenge }) => {
  return (
    <div>
      <h2>{challenge.name}</h2>
      <p><strong>Description:</strong> {challenge.description}</p>
      <p><strong>Status:</strong> {challenge.status}</p>
      <p><strong>Duration:</strong> {challenge.duration}</p>
      <p><strong>Level:</strong> {challenge.level}</p>
      <p><strong>Author:</strong> {challenge.author.firstName} {challenge.author.lastName}</p>
      <p><a href={challenge.url}>GitHub Repository</a></p>
      {/* Add more details as needed */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          {/* Dynamically generated NavLinks for challenges */}
          {challenges.map(challenge => (
            <li key={challenge.slug}>
              <NavLink to={`/challenge/${challenge.slug}`}>{challenge.name}</NavLink>
            </li>
          ))}
        </ul>
        <Routes>
          {/* Dynamically generated Routes for challenges */}
          {challenges.map(challenge => (
            <Route key={challenge.slug} path={`/challenge/${challenge.slug}`} element={<ChallengeDetail challenge={challenge} />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

```
# What is Prompt
This approach allows you to manage navigation prompts in a more controlled and declarative manner, aligning with React Router v6's paradigm. Adjust the logic in handleNavigation as per your specific requirements for checking conditions before allowing navigation.
```jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

function Home() {
  const [isPromptActive, setPromptActive] = useState(false);

  // Function to set prompt active
  const handlePrompt = () => {
    setPromptActive(true);
  };

  // Function to handle navigation
  const handleNavigation = () => {
    // Perform any checks or actions before navigation

    // Navigate away (example, redirect to home)
    return <Navigate to="/home" />;
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handlePrompt}>Navigate to About</button>
      {isPromptActive && (
        <div>
          <p>Are you sure you want to navigate away?</p>
          <button onClick={handleNavigation}>Yes, Navigate</button>
        </div>
      )}
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the about page content.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

```

# Creating Navbar
[[Live ](https://6695070bc89110094fa2696b--illustrious-panda-83ac35.netlify.app/kaif)
```jsx
import React from 'react'
import './kaif.css'
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './Home';
import AboutPage from './Aboutpage';
import Kaif from './Kaif';
function App(){
    return(
        <Router>
            <div>
                <ul>
                    <li>
                       <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/kaif'>Kaif</NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path='/' element={<Navigate to='home'/>}/>
                    <Route path='/home' element={<Home />}/>
                    <Route  path='about' element={<AboutPage />}/>
                    <Route  path='kaif' element={<Kaif />}/>
                </Routes>
            </div>
        </Router>
    )
}
export default App
```
# CSS navbar 
```jsx
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}

.container {
  padding: 20px;
  margin-top: 20px;
}


```


