import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";

const ProductItem = ({ product }) => {
    const { handleCart, addToCart } = useContext(AuthContext);

    return (
        <div className="productItem">
            <img src={product.image} alt="product" />
            <div className="h3-p">
                <h3>{product.title.length > 54? `${product.title.slice(0,54)}...` : `${product.title}`}</h3>
                <p className="category-p">Category: {product.category}</p>
            </div>
            <p>Price: {product.price}$</p>
            <button onClick={() => handleCart(product, addToCart)}><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        </div>
    );
}

export default ProductItem;