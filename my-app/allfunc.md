```jsx
const { Component } = require("react");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filteredProducts: [],
            currentindex: 0,
            loading: true,
            error: null,
            cart: [],
            favorites: [],
            searchQuery: ""
        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = () => {
        this.setState({ loading: true, error: null });

        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) throw new Error('Network was not good');
                return response.json();
            })
            .then(data => {
                this.setState({
                    products: data,
                    filteredProducts: data,
                    loading: false,
                    currentindex: 0
                });
            })
            .catch(error => {
                this.setState({ error: 'Network not okay', loading: false });
                console.log(error);
            });
    }

    handleNextProduct = () => {
        this.setState(prevState => ({
            currentindex: prevState.currentindex + 1
        }));
    }

    handlePreviousProduct = () => {
        this.setState(prevState => ({
            currentindex: prevState.currentindex - 1
        }));
    }

    addToCart = () => {
        const currentProduct = this.state.filteredProducts[this.state.currentindex];
        this.setState(prevState => {
            const existing = prevState.cart.find(item => item.id === currentProduct.id);
            if (existing) {
                return {
                    cart: prevState.cart.map(item =>
                        item.id === currentProduct.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            } else {
                return {
                    cart: [...prevState.cart, { ...currentProduct, quantity: 1 }]
                };
            }
        });
    };

    removeFromCart = (id) => {
        this.setState(prevState => ({
            cart: prevState.cart.filter(item => item.id !== id)
        }));
    };

    clearCart = () => {
        this.setState({ cart: [] });
    }

    addToFavorites = () => {
        const currentProduct = this.state.filteredProducts[this.state.currentindex];
        if (!this.state.favorites.some(p => p.id === currentProduct.id)) {
            this.setState(prevState => ({
                favorites: [...prevState.favorites, currentProduct]
            }));
        }
    };

    removeFromFavorites = (id) => {
        this.setState(prevState => ({
            favorites: prevState.favorites.filter(item => item.id !== id)
        }));
    };

    handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = this.state.products.filter(product =>
            product.title.toLowerCase().includes(query)
        );
        this.setState({
            searchQuery: e.target.value,
            filteredProducts: filtered,
            currentindex: 0
        });
    }

    render() {
        const { loading, error, filteredProducts, currentindex, cart, favorites, searchQuery } = this.state;
        const product = filteredProducts[currentindex];
        const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        return (
            <div style={{ fontFamily: "Arial", padding: "20px" }}>
                <h2>🛍️ Product Viewer</h2>
                <input
                    type="text"
                    placeholder="🔍 Search products by title"
                    value={searchQuery}
                    onChange={this.handleSearch}
                    style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
                />

                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {!loading && product && (
                    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", maxWidth: "500px" }}>
                        <img src={product.image} alt={product.title} width="200" height="200" />
                        <h3>{product.title}</h3>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Rating:</strong> ⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
                        <p><strong>Price:</strong> ₹{product.price}</p>
                        <p>{product.description.slice(0, 100)}...</p>

                        <div style={{ marginTop: "10px" }}>
                            <button onClick={this.handlePreviousProduct} disabled={currentindex === 0}>◀️ Previous</button>
                            <button onClick={this.handleNextProduct} disabled={currentindex >= filteredProducts.length - 1}>Next ▶️</button>
                            <button onClick={this.addToCart}>Add to Cart 🛒</button>
                            <button onClick={this.addToFavorites}>❤️ Add to Favorites</button>
                        </div>
                    </div>
                )}

                {!loading && filteredProducts.length === 0 && <p>No products match your search.</p>}

                <hr />
                <h2>🧺 Cart Summary</h2>
                {cart.length === 0 ? (
                    <p>Cart is empty.</p>
                ) : (
                    <div>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id}>
                                    {item.title} (x{item.quantity}) - ₹{(item.price * item.quantity).toFixed(2)}
                                    <button onClick={() => this.removeFromCart(item.id)} style={{ marginLeft: "10px" }}>❌ Remove</button>
                                </li>
                            ))}
                        </ul>
                        <p><strong>Total:</strong> ₹{totalPrice.toFixed(2)}</p>
                        <button onClick={this.clearCart}>Clear Cart 🧹</button>
                    </div>
                )}

                <hr />
                <h2>❤️ Favorites</h2>
                {favorites.length === 0 ? (
                    <p>No favorite products yet.</p>
                ) : (
                    <ul>
                        {favorites.map((item) => (
                            <li key={item.id}>
                                {item.title} - ₹{item.price}
                                <button onClick={() => this.removeFromFavorites(item.id)} style={{ marginLeft: "10px" }}>❌ Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default App;

```
