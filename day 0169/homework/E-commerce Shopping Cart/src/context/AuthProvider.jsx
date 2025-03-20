import { createContext, useEffect, useState } from "react";
import { useCart } from "../hooks/useCart.js";
import { getLocalStorage } from "../utils/localSorage.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [productsList, setProductsList] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [cartList, handleCart] = useCart(getLocalStorage("cartList") || []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProductsList(data);
            setIsLoading(false);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const addToCart = (product) => {
        if(cartList.filter(curValue => curValue.id === product.id).length === 0) {
            return [...cartList, { ...product, quantity: 1 }];
        }

        return cartList.map(curValue => {
            if(curValue.id === product.id) {
                return { ...curValue, quantity: curValue.quantity + 1 };
            }

            return curValue;
        })
    }

    const removeFromCart = (product) => {
        return cartList.filter(curValue => curValue.id !== product.id);
    }

    const updateQuantity = (product, number) => {
        if(product.quantity + number > 0) {
            return cartList.map(curValue => {
                if(curValue.id === product.id) {
                    return { ...curValue, quantity: curValue.quantity + number };
                }
                
                return curValue;
            })
        }

        return cartList.filter(curValue => curValue.id !== product.id);
    }

    return (
        <AuthContext.Provider value={{ productsList, isLoading, cartList, handleCart, addToCart, removeFromCart, updateQuantity }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;