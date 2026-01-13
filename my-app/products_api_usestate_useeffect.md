```jsx
import React, { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productsPerPage = 4;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const paginatedProducts = filteredProducts.slice(
    currentPage * productsPerPage,
    currentPage * productsPerPage + productsPerPage
  );

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleNext = () => {
    const maxPage = Math.floor(filteredProducts.length / productsPerPage);
    setCurrentPage(prev => Math.min(prev + 1, maxPage));
  };

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 Product Store</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          setCurrentPage(0);
        }}
        style={styles.searchInput}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={styles.grid}>
        {paginatedProducts.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h4>{product.title.slice(0, 40)}...</h4>
            <p>₹{product.price.toFixed(2)}</p>
            <button style={styles.button} onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div style={styles.pagination}>
        <button onClick={handlePrev} disabled={currentPage === 0}>⬅ Prev</button>
        <span> Page {currentPage + 1} </span>
        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * productsPerPage >= filteredProducts.length}
        >
          Next ➡
        </button>
      </div>

      <div style={styles.cartSection}>
        <h2>🧺 Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          <>
            <ul style={styles.cartList}>
              {cart.map((item, index) => (
                <li key={index} style={styles.cartItem}>
                  <img src={item.image} alt="cart" style={styles.cartImage} />
                  <span style={{ flex: 1 }}>{item.title.slice(0, 35)}...</span>
                  <span>₹{item.price}</span>
                  <button onClick={() => handleRemoveFromCart(index)} style={styles.removeBtn}>❌</button>
                </li>
              ))}
            </ul>
            <h3>Total: ₹{total.toFixed(2)}</h3>
            <button onClick={clearCart} style={styles.clearBtn}>🗑 Clear Cart</button>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    fontFamily: 'Arial, sans-serif',
    maxWidth: 1100,
    margin: 'auto',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20
  },
  searchInput: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    border: '1px solid #ccc',
    marginBottom: 20
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 20
  },
  card: {
    border: '1px solid #ddd',
    padding: 15,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: 160,
    objectFit: 'contain',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    marginTop: 5
  },
  pagination: {
    textAlign: 'center',
    margin: '30px 0',
    fontSize: 18
  },
  cartSection: {
    marginTop: 40,
    borderTop: '2px solid #eee',
    paddingTop: 20
  },
  cartList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: 20
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    borderBottom: '1px solid #ddd',
    paddingBottom: 10
  },
  cartImage: {
    width: 50,
    height: 50,
    objectFit: 'contain',
    marginRight: 10
  },
  removeBtn: {
    backgroundColor: 'transparent',
    color: 'red',
    border: 'none',
    fontSize: 18,
    cursor: 'pointer',
    marginLeft: 10
  },
  clearBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '6px 14px',
    borderRadius: 5,
    cursor: 'pointer'
  }
};

export default App;

```
