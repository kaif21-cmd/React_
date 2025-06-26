```jsx
const { Component } = require("react");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentindex: 0,
            loading: true,
            error: null,
            searchQuery: ""
        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = () => {
        this.setState({
            loading: true,
            error: null,
        });

        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network was not good');
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                    products: data,
                    loading: false,
                    currentindex: 0,
                });
            })
            .catch(error => {
                this.setState({
                    error: 'Network not okay',
                    loading: false,
                });
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

    handleSearchChange = (event) => {
        this.setState({
            searchQuery: event.target.value.toLowerCase(),
            currentindex: 0
        });
    }

    render() {
        const { loading, error, products, currentindex, searchQuery } = this.state;

        // Filter products based on search query
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchQuery)
        );

        const product = filteredProducts[currentindex];

        return (
            <div style={{ padding: 20 }}>
                <h1>🛍️ Product Viewer</h1>

                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={this.handleSearchChange}
                    style={{ marginBottom: '15px', padding: '5px', width: '300px' }}
                />

                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {!loading && product && (
                    <div>
                        <img src={product.image} alt={product.title} width="200" height="200" />
                        <h3>{product.title}</h3>
                        <p><strong>Price:</strong> ₹{product.price}</p>

                        <button
                            onClick={this.handlePreviousProduct}
                            disabled={currentindex === 0}
                        >
                            Previous
                        </button>
                        <button
                            onClick={this.handleNextProduct}
                            disabled={currentindex >= filteredProducts.length - 1}
                        >
                            Next Product
                        </button>
                    </div>
                )}

                {!loading && filteredProducts.length === 0 && (
                    <p>No products match your search.</p>
                )}
            </div>
        );
    }
}

export default App;

```
