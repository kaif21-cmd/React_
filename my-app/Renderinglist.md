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
## using filter methord or state
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

# Small Application Where i used filter,map,list methord to searching in the list
```jsx
import React, { Component } from 'react';
import './Kaif.css';

const students = [
  { id: 1, name: 'Kaif', age: '21', post: 'Engineer', photo: 'https://media.licdn.com/dms/image/D5603AQFKefkmAn4mwA/profile-displayphoto-shrink_400_400/0/1702370273805?e=1728518400&v=beta&t=MLdSo72apoKn0Fpj8vGete1_aoRp5DTTX_i3xgqqUt8' },
  { id: 2, name: 'Shahan', age: '23', post: 'Engineer', photo: 'https://media.licdn.com/dms/image/D4D03AQF03T5ATeQ9YA/profile-displayphoto-shrink_100_100/0/1679203253201?e=1728518400&v=beta&t=RcljwuY9ufIC7CqKNm_OKLX22Obxxnb7VUzKzNiCDhs' },
  { id: 3, name: 'Virat Kholi', age: '32', post: 'Indian Cricketer', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/220px-Virat_Kohli_in_PMO_New_Delhi.jpg' },
  { id: 4, name: 'Suhel Akhtar', age: '27', post: 'Network Engineer At Airtel ', photo: 'https://media.licdn.com/dms/image/D5635AQGmRQIoIkN-tw/profile-framedphoto-shrink_100_100/0/1720798445516?e=1723651200&v=beta&t=hPere8vleL4F42bTQh7s6kywzwHv9c94imNkErJSstM' },
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
      <div className="app-container">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={this.handleSearchChange}
          className="search-input"
        />
        <ul className="student-list">
          {filteredStudents.map((student) => (
            <li key={student.id} className="student-item">
              <img src={student.photo} alt={student.name} className="student-photo" />
              <div className="student-details">
                <strong>Name:</strong> {student.name}
                <br />
                <strong>Age:</strong> {student.age}
                <br />
                <strong>Post:</strong> {student.post}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;


```
[Live Link](https://66b3963739744e112c32224f--merry-tiramisu-8d210d.netlify.app/)

