# FORM WITH DIFFERENT INPUTS
```jsx
import React, { Component } from 'react';

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
];

const selectOptions = options.map(({ value, label }) => (
  <option key={value} value={value}> {label} </option>
));

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      });
    } else if (type === 'file') {
      this.setState({ [name]: e.target.files[0] });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = this.state;

    const formattedSkills = [];
    for (const key in skills) {
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase());
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills,
    };
    console.log(data);
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
    } = this.state;

    return (
      <div className="App">
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group">
              <label htmlFor="firstName">First Name </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name </label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tel">Telephone </label>
            <input
              type="tel"
              name="tel"
              value={tel}
              onChange={this.handleChange}
              placeholder="Tel"
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of birth </label>
            <input
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={this.handleChange}
              placeholder="Date of Birth"
            />
          </div>
          <div className="form-group">
            <label htmlFor="favoriteColor">Favorite Color</label>
            <input
              type="color"
              id="favoriteColor"
              name="favoriteColor"
              value={favoriteColor}
              onChange={this.handleChange}
              placeholder="Favorite Color"
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={weight}
              onChange={this.handleChange}
              placeholder="Weight in Kg"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label> <br />
            <select name="country" onChange={this.handleChange} id="country" value={country}>
              {selectOptions}
            </select>
          </div>

          <div className="form-group">
            <p>Gender</p>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={this.handleChange}
                checked={gender === 'Female'}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input
                id="male"
                type="radio"
                name="gender"
                value="Male"
                onChange={this.handleChange}
                checked={gender === 'Male'}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                id="other"
                type="radio"
                name="gender"
                value="Other"
                onChange={this.handleChange}
                checked={gender === 'Other'}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>

          <div className="form-group">
            <p>Select your skills</p>
            <div>
              <input
                type="checkbox"
                id="html"
                name="html"
                onChange={this.handleChange}
              />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="css"
                name="css"
                onChange={this.handleChange}
              />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="javascript"
                name="javascript"
                onChange={this.handleChange}
              />
              <label htmlFor="javascript">JavaScript</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio</label> <br />
            <textarea
              id="bio"
              name="bio"
              value={bio}
              onChange={this.handleChange}
              cols="30"
              rows="10"
              placeholder="Write about yourself ..."
            />
          </div>

          <div className="form-group">
            <input type="file" name="file" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div>
            {/* if you want to print the data  */}
            <p>
            {firstName},
            {lastName},
            {email},
            {country},
            {dateOfBirth},
            {tel},
            {weight}
            {country},
            {gender},
            {favoriteColor}
            
            </p>
        </div>
      </div>
    );
  }
}

export default App;
```
