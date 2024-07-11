### React Component Lifecycle Phases

#### Mounting

**Mounting** is like setting up a new gadget:

- **Constructor**: You set up initial things, like creating a new blueprint for how your gadget should look and work.
  
- **getDerivedStateFromProps**: You might adjust some settings based on new information you receive before starting.

- **Render**: You actually build the gadget based on the blueprint.

- **componentDidMount**: You turn on the gadget and start using it. This is where you do things like fetching data from the internet or setting timers.

#### Updating

**Updating** is like changing settings on your gadget:

- **getDerivedStateFromProps**: You adjust settings if the gadget gets new instructions.

- **shouldComponentUpdate**: You decide if it's worth making changes based on the new instructions. Sometimes, you might skip making changes if nothing important has changed.

- **Render**: You update the gadget to reflect any changes in settings.

- **componentDidUpdate**: You finish making changes and start using the updated gadget. This is where you might do things like animate changes or send updated data to a server.

#### Unmounting

**Unmounting** is like packing away your gadget:

- **componentWillUnmount**: You clean up any leftover things, like turning off timers or stopping any ongoing processes.

These phases help manage how components behave as they are created, updated with new information, and finally removed from use.

### Constructor in React Component

In React, the constructor is a special method used for initializing a component when it's first created. It's called before the component is mounted. Here's an example of a React component `App` that demonstrates the use of a constructor:

```jsx
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Firstname: 'Kaif'
        };
    }

    name = () => {
        this.setState({
            Firstname: this.state.Firstname
        });
    }

    render() {
        const name = this.state.Firstname;
        return (
            <div>
                <p>Name is {name}</p>
            </div>
        );
    }
}

export default App;
```
### componentDidMount method

#### As we can understand the name of the method that this method called after component is render. This a place place to setting time interval and calling API. Look at the following setTimeout implementation in componentDidMount method.
```jsx
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    }

    render() {
        const counter = this.state.count;
        return (
            <div>
                <h1>Timer</h1>
                <h2>{counter}</h2>
            </div>
        );
    }
}

export default App;



```
### Implementing Api
### In the above snippet of code, we saw how to implement setTimeout inside a componentDidMount method. In next example, we will implement an API call using fetch.
```jsx
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        const apiUrl = 'https://freetestapi.com/api/v1/students';
        
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                    students: data,
                    loading: false,
                });
            })
            .catch(error => {
                this.setState({
                    error: 'Error fetching data',
                    loading: false,
                });
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const { students, loading, error } = this.state;

        return (
            <div>
                <h1>Students Loading List</h1>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <ul>
                    {students.map(student => (
                        <li key={student.id}>
                            <strong>Name:</strong>
                             {student.name},
                             <br>
                             </br>
                            {student.age},
                            <br>
                            </br>
                            {student.email},
                            <br>
                            </br>
                            {student.phone}
                            <br>
                            </br>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;

```
#### UPDATING 
**UPDATING** is like changing settings on your gadget
#### shouldComponentUpdate : built-in life cycle method should return a boolean. If this method does not return true the application will not update.

If the method does not return true the application will never update. This can be used for instance to block use when it reaches to a certain point(game, subscription) or may be to block a certain user.

#### componentDidUpdate
if we want to stop doing challenge after 30 days we can increment the day from 1 to 30 and we can block the application at day 30.
The componentDidUpdate method takes two parameters: the prevProps and prevState. It is called after the component is updated in the DOM.

```jsx
import React, { Component } from 'react'


class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      day: 1,
      congratulate: '',
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 31) {
      return false
    } else {
      return true
    }
  }

  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.day === 30) {
      this.setState({
        congratulate: 'Congratulations,Challenge has been completed',
      })
    }
    console.log(prevState, prevProps)
  }

  render() {
    return (
        
      <div className='App'>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    )
  }
}

export default App

```

## Unmounting

The final phase in the lifecycle of a component is unmounting. The unmounting phase removes component from the DOM.
The componentWillUnmount method is the only built-in method that gets called when a component is unmounted
```jsx
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            message: '',
        };
        this.timerID = null; // Initialize timerID
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            if (this.state.count >= 30) {
                clearInterval(this.timerID); // Stop the timer when count reaches 30
                this.setState({ message: 'Time is Completed Just Stop Working  !' });
            } else {
                this.setState({
                    count: this.state.count + 1
                });
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID); // Clear interval when component is unmounting
    }

    render() {
        const { count, message } = this.state;
        return (
            <div>
                <h1>Timer</h1>
                <h2>{count}</h2>
                {message && <p>{message}</p>}
            </div>
        );
    }
}

export default App;

```
