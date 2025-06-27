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
            searchTerm: ''
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

    handleSearchChange = (e) => {
        this.setState({
            searchTerm: e.target.value,
            currentIndex: 0 // reset to first item in filtered list
        });
    }

    render() {
        const { products, currentIndex, loading, error, searchTerm } = this.state;

        // Filter products by title
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const product = filteredProducts[currentIndex];

        return (
            <div style={{ padding: 20 }}>
                <h1>🛍️ Product Viewer</h1>

                <input
                    type="text"
                    placeholder="Search product..."
                    value={searchTerm}
                    onChange={this.handleSearchChange}
                    style={{ padding: 10, width: '60%', marginBottom: 20 }}
                />

                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {!loading && product && (
                    <div style={{ border: '1px solid #ccc', padding: 20, borderRadius: 10 }}>
                        <img src={product.image} alt={product.title} width="200" height="200" />
                        <h3>{product.title}</h3>
                        <p><strong>Price:</strong> ₹{product.price}</p>
                        <button
                            onClick={this.handleNextProduct}
                            disabled={currentIndex >= filteredProducts.length - 1}
                        >
                            Next Product
                        </button>
                    </div>
                )}

                {!loading && filteredProducts.length === 0 && <p>No matching products found.</p>}
            </div>
        );
    }
}

module.exports = App;

```
