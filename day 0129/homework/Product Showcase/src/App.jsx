import ProductList from './components/ProductList';

const App = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone X100",
      price: "$799",
      description: "A sleek and powerful smartphone with a 6.5-inch display and advanced camera features.",
    },
    {
      id: 2,
      name: "Laptop Pro 15",
      price: "$1499",
      description: "High-performance laptop with a 15-inch Retina display and a powerful Intel i7 processor.",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: "$199",
      description: "Noise-canceling wireless headphones with 30 hours of battery life.",
    }
  ]
  return (
    <>
      <h1>Product Showcase</h1>
      <ProductList products={products} />
    </>
  )
}

export default App;
