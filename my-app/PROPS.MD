## What is Props in React?
Props is a special keyword in React that stands for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data.
## let's Understand with code
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

// Header Component
const Header = (props) => (
  <header>
    <div className='header-wrapper'>
      <h1>{props.welcome}</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <small>{props.date}</small>
    </div>
  </header>
);

// Age Component
const Age = (props) => (
  <div>
    <h1>The person's age is {props.age}</h1>
  </div>
);

// Name Component
const Name = (props) => (
  <div>
    <h1>Hello, my name is {props.names}</h1>
  </div>
);

// Love Component
const Love = (props) => (
  <div>
    <h1>My love is {props.love}</h1>
  </div>
);

// Array Component
const ArrayComponent = (props) => (
  <div>
    <h1>This array: {props.array.join(', ')}</h1>
  </div>
);

// Object Components
const Data = (props) => (
  <div>
    <h1>{props.data.welcome}</h1>
    <h2>{props.data.title}</h2>
    <p>{props.data.fee}</p>
  </div>
);

const Data2 = (props) => (
  <div>
    <h1>{props.data2.id}</h1>
    <h1>{props.data2.name}</h1>
    <h1>{props.data2.Skills}</h1>
  </div>
);

const Greet = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
);

// App Component
const App = () => {
  const welcome = 'Welcome to 30 Days Of React';
  const title = 'Getting Started React';
  const subtitle = 'JavaScript Library';
  const firstName = 'Asabeneh';
  const lastName = 'Yetayeh';
  const date = 'Oct 4, 2020';
  const age = 24;
  const names = "kaif";
  const love = "gym";
  const array = ['HTML', 'CSS', 'JS'];
  const data = {
    welcome: 'hello welcome kaifs world',
    title: 'here we learn react',
    fee: 'Free of cost'
  };
  const data2 = {
    id: 1,
    name: "kaif",
    course: "Btech Cse",
    Skills: "Mern Developer"
  };

  // As a function
  const greetPeople = () => {
    alert('Hello Give 500Rs');
  };

  return (
    <div className='app'>
      <Header
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
      />
      <Age age={age} />
      <Name names={names} />
      <Love love={love} />
      <ArrayComponent array={array} />
      <Data data={data} />
      <Data2 data2={data2} />
      <Greet text='Greet People' onClick={greetPeople} />
      <Greet text='Show Time' onClick={() => alert(new Date())} />
    </div>
  );
};

// Render the App component to the root element
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
