```jsx
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      loading: true,
      error: null,
      currentPage: 0,
      searchTerm: '',
      searchBy: 'id', // can be 'id' or 'name'
    };
  }

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    this.setState({ loading: true, error: null });

    fetch('https://dummyjson.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Network issue');
        return res.json();
      })
      .then((data) => {
        this.setState({
          students: data.users,
          loading: false,
          currentPage: 0,
        });
      })
      .catch((error) => {
        this.setState({ error: 'Failed to fetch students.', loading: false });
        console.error(error);
      });
  };

  handleSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
      currentPage: 0,
    });
  };

  handleSearchByChange = (e) => {
    this.setState({
      searchBy: e.target.value,
      currentPage: 0,
      searchTerm: '',
    });
  };

  handleNext = () => {
    this.setState((prev) => ({
      currentPage: prev.currentPage + 1,
    }));
  };

  handlePrevious = () => {
    this.setState((prev) => ({
      currentPage: prev.currentPage - 1,
    }));
  };

  render() {
    const { students, loading, error, currentPage, searchTerm, searchBy } = this.state;

    const filtered = students.filter((student) => {
      if (searchBy === 'id') {
        return student.id.toString().includes(searchTerm);
      } else if (searchBy === 'name') {
        const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
      }
      return true;
    });

    const studentsPerPage = 10;
    const start = currentPage * studentsPerPage;
    const end = start + studentsPerPage;
    const currentStudents = filtered.slice(start, end);

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Student Directory</h1>

        <div style={styles.searchSection}>
          <select value={searchBy} onChange={this.handleSearchByChange} style={styles.select}>
            <option value="id">Search by ID</option>
            <option value="name">Search by Name</option>
          </select>

          <input
            type="text"
            placeholder={searchBy === 'id' ? 'Enter ID...' : 'Enter Name...'}
            value={searchTerm}
            onChange={this.handleSearchChange}
            style={styles.input}
          />
        </div>

        {loading && <p style={styles.info}>Loading...</p>}
        {error && <p style={styles.error}>{error}</p>}

        <ul style={styles.list}>
          {currentStudents.map((student) => (
            <li key={student.id} style={styles.card}>
              <img src={student.image} alt={student.firstName} style={styles.image} />
              <div>
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Phone:</strong> {student.phone}</p>
              </div>
            </li>
          ))}
        </ul>

        <div style={styles.pagination}>
          <button
            onClick={this.handlePrevious}
            disabled={currentPage === 0}
            style={styles.button}
          >
            Previous
          </button>
          <span> Page {currentPage + 1} of {Math.ceil(filtered.length / studentsPerPage)} </span>
          <button
            onClick={this.handleNext}
            disabled={end >= filtered.length}
            style={styles.button}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '30px auto',
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  searchSection: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: '15px',
    marginBottom: '10px',
    borderLeft: '5px solid #4caf50',
    borderRadius: '5px',
  },
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  pagination: {
    textAlign: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 15px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4caf50',
    color: 'white',
    cursor: 'pointer',
  },
  info: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#555',
  },
  error: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
};

export default App;

```
