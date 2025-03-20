import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import CartItem from "./CartItem.jsx";

const Cart = () => {
    const { cartList } = useContext(AuthContext);

    
    return (
        <section className="cart-section">
            <div className="cart-header">
                <h2>Products Cart</h2>
                <p>Full Pirce: ${
                    cartList.length > 0 ? cartList.reduce((acc, curValue) => acc + curValue.price * curValue.quantity, 0).toFixed(2) : 0
                }</p>
            </div>
            {
                cartList.length > 0 && (
                cartList.map(curValue => {
                    return <CartItem key={curValue.id} product={curValue} />;
                }))
            }
        </section>
    );
}

export default Cart;