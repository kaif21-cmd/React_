# Functional Component
Functional components are simpler and rely on functions to define the component:

```jsx
Copy code
// FunctionalComponent.jsx

import React from 'react';

const FunctionalComponent = () => {
  return (
    <div>
      <h2>Functional Component</h2>
      <p>This is a functional component in React.</p>
    </div>
  );
}

export default FunctionalComponent;
```
# Class Component
Class components use ES6 classes to define the component:

jsx
```jsx

import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>This is a class component in React.</p>
      </div>
    );
  }
}

export default ClassComponent;
```
# Component Composition
You can compose components together to create more complex UIs:

```jsx

import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

const ParentComponent = () => {
  return (
    <div>
      <h2>Parent Component</h2>
      <p>This is a parent component that renders other components.</p>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default ParentComponent;
```
 # Using Props
Props allow you to pass data from a parent to a child component:

```jsx


import React from 'react';

const GreetingComponent = (props) => {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default GreetingComponent;
```
