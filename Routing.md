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
