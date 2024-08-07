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
