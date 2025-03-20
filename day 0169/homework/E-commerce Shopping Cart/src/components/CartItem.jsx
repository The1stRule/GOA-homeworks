import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";

const CartItem = ({ product }) => {
    const { handleCart, removeFromCart, updateQuantity } = useContext(AuthContext);
    return (
        <div className="cartItem">
            <div className="img-div" style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
            }}></div>
            <p className="cart-title">{product.title.length > 54? `${product.title.slice(0,54)}...` : `${product.title}`}</p>
            <div className="quantity-div">
                <p className="minus" onClick={() => handleCart(product, updateQuantity, -1)}>-</p>
                <p className="quantity">{product.quantity}</p>
                <p className="plus" onClick={() => handleCart(product, updateQuantity, 1)}>+</p>
            </div>
            <p className="cart-price">Price: {(product.price * product.quantity).toFixed(2)}$</p>
            <button onClick={() => handleCart(product, removeFromCart)}>Remove from cart</button>
        </div>
    );
}

export default CartItem;