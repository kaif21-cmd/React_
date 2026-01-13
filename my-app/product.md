```jsx
const { Component } = require("react");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentIndex: 0,
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = () => {
        this.setState({ loading: true, error: null });
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network error');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ products: data, loading: false, currentIndex: 0 });
            })
            .catch(error => {
                this.setState({ error: 'Failed to load products', loading: false });
                console.error(error);
            });
    }

    handleNextProduct = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }

    render() {
        const { products, currentIndex, loading, error } = this.state;
        const product = products[currentIndex];

        return (
            <div style={{ padding: 20 }}>
                <h1>🛍️ Product Viewer</h1>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {!loading && product && (
                    <div style={{ border: '1px solid #ccc', padding: 20, borderRadius: 10 }}>
                        <img src={product.image} alt={product.title} width="200" height="200" />
                        <h3>{product.title}</h3>
                        <p><strong>Price:</strong> ₹{product.price}</p>
                        <button
                            onClick={this.handleNextProduct}
                            disabled={currentIndex >= products.length - 1}
                        >
                            Next Product
                        </button>
                    </div>
                )}

                {!loading && !product && <p>No products found.</p>}
            </div>
        );
    }
}

module.exports = App;

```
```jsx
[
  {
    "id": 1,
    "title": "Smartphone X10",
    "price": 19999,
    "image": "https://via.placeholder.com/200x200.png?text=Smartphone+X10"
  },
  {
    "id": 2,
    "title": "Bluetooth Headphones",
    "price": 2999,
    "image": "https://via.placeholder.com/200x200.png?text=Bluetooth+Headphones"
  },
  {
    "id": 3,
    "title": "Gaming Laptop Z",
    "price": 84999,
    "image": "https://via.placeholder.com/200x200.png?text=Gaming+Laptop+Z"
  },
  {
    "id": 4,
    "title": "4K Smart TV",
    "price": 45999,
    "image": "https://via.placeholder.com/200x200.png?text=4K+Smart+TV"
  },
  {
    "id": 5,
    "title": "Wireless Mouse",
    "price": 899,
    "image": "https://via.placeholder.com/200x200.png?text=Wireless+Mouse"
  }
]

```
