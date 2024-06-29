import React, { Component } from 'react';

class Kaif extends Component {
  render() {
    const { id, name, Profession, Email, Phone } = this.props.data;
    return (
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{Profession}</p>
        <p>{Email}</p>
        <p>{Phone}</p>
      </div>
    );
  }
}

class Shahan extends Component {
  render() {
    const { id, name, Profession, Email, Phone } = this.props.data2;
    return (
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{Profession}</p>
        <p>{Email}</p>
        <p>{Phone}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const data = {
      id: 1,
      name: "Kaif",
      Profession: "Software Engineer",
      Email: "Kaifshaikh262000@gmail.com",
      Phone: 9648338838,
    };
    const data2 = {
      id: 2,
      name: "Shahan Khan",
      Profession: "Software Engineer",
      Email: "Shahankhan262000@gmail.com",
      Phone: 9641338838,
    };
    return (
      <div>
        <Kaif data={data} />
        <Shahan data2={data2} />
      </div>
    );
  }
}

export default App;
