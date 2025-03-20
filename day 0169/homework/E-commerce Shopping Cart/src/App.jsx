import Cart from "./components/Cart.jsx";
import Header from "./components/header.jsx";
import ProductsList from "./components/ProductsList.jsx";

const App = () => {

    return (
        <>
            <Header />
            <main>
                <Cart />
                <ProductsList />
            </main>
        </>

    );
}

export default App;