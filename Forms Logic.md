 # Form Logic How to Create Forms In React
```jsx
import React, { Component } from 'react';

class App extends Component {
    state = {
        firstname: '',
        lastname: '',
        email:'',
        phone:''
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { firstname, lastname,email,phone} = this.state;
        return (
            <div>
                <form onSubmit={this.ha}
                ></form>
                <label htmlFor='firstname'>Firstname:</label>
                <input
                    type='text'
                    id='firstname'
                    name='firstname'
                    placeholder='firstname'
                    value={firstname}
                    onChange={this.handleChange}
                />
                <br />
                <label htmlFor='lastname'>Lastname:</label>
                <input
                    type='text'
                    id='lastname'
                    name='lastname'
                    placeholder='lastname'
                    value={lastname}
                    onChange={this.handleChange}
                />
                <br></br>
                <label htmlFor='email'>Email</label>
                <input
                type='text'
                id='email'
                name='email'
                placeholder='email'
                value={email}
                onChange={this.handleChange}
                ></input>
                <br>
                </br>
                <label htmlFor='Phone'>Phone</label>
                <input
                type='text'
                id='phone'
                name='phone'
                placeholder='phone'
                value={phone}
                onChange={this.handleChange}
                ></input>
                <h1>{firstname}</h1>
                <h1>{lastname}</h1>
                <h1>{email}</h1>
                <h1>{phone}</h1>

            </div>
        );
    }
}

export default App;


```

