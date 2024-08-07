# Rendering list 
## Maping over List
```jsx
import React from 'react';

const products = [
    { id: 1, name: 'kaif', age: '21', post: 'Engineer' },
    { id: 2, name: 'shahan', age: '23', post: 'Engineer' },
    { id: 3, name: 'umair', age: '22', post: 'Engineer' },
];

const FunctionComponents = () => {
    const list = products.map(student => (
        <div key={student.id}>
            <strong>Name:</strong>
            {student.name}
            <br>
            </br>
            <strong>Age:</strong>
            {student.age}
            <br>
            </br>
            <strong>Post:</strong>
            {student.post}
        </div>
    ));

    return (
        <div>
            {list}
        </div>
    );
};

export default FunctionComponents;

```

# Searching in list by names 
```jsx
import React, { Component } from 'react';

const students = [
  { id: 1, name: 'Kaif', age: '21', post: 'Engineer' },
  { id: 2, name: 'Shahan', age: '23', post: 'Engineer' },
  { id: 3, name: 'Umair', age: '22', post: 'Engineer' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const { search } = this.state;
    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={this.handleSearchChange}
        />
        <ul>
          {filteredStudents.map((student) => (
            <li key={student.id}>
              <strong>Name:</strong> {student.name}
              <br />
              <strong>Age:</strong> {student.age}
              <br />
              <strong>Post:</strong> {student.post}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

```
