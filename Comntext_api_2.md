```jsx
// ThemeContext.js
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

```

```jsx
// App.js
import React, { useContext } from "react";
import { CartContext, CartProvider } from "./ThemeContext";

const CartItem = () => {
  const { cart, addItem, removeItem } = useContext(CartContext);

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      name: "Apple",
    };
    addItem(newItem);
  };

  return (
    <div>
      <h1>Cart Items ({cart.length})</h1>
      <button onClick={handleAdd}>Add Apple</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <CartItem />
    </CartProvider>
  );
};

export default App;

```
