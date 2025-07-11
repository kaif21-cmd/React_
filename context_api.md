```jsx
import { createContext,useState } from "react";

export const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('light')
    const toggletheme=()=>{
        setTheme((prevTheme)=>(prevTheme==='light'?'dark':'light'))
    }
    return(
        <ThemeContext.Provider value={{theme,toggletheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

#APP.JS

]import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '2rem',
    textAlign: 'center',
    borderRadius: '10px',
  };

  return (
    <div style={styles}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} mode
      </button>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

export default App;

```
