```jsx
import React, { useState, useEffect } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // ✅ fixed: added URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Error while fetching');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error while fetching:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default User;

```
