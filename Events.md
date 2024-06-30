# What is an event?
An event is an action or occurrence recognized by a software. To make an event more clear let's use the daily activities we do when we use a computer such as clicking on a button, hover on an image, pressing a keyboard, scrolling the mouse wheel and etc. In this section, we will focus only some of the mouse and keyboard events. The react documentation has already a detail note about events.

Handling events in React is very similar to handling elements on DOM elements using pure JavaScript. Some of the syntax difference between handling event in React and pure JavaScript:

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.
Let's see some examples to understand event handling.

```jsx
import React from 'react'
// if it is functional components
const App = () => {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }
  return <button onClick={greetPeople}> </button>
}
'''
# using Class
import React, { Component } from 'react'
// if it is functional components
class App extends Component {
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }
  render() {
    return <button onClick={this.greetPeople}> </button>
  }
}
```



