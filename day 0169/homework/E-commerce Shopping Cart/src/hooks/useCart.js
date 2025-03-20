import { useState } from "react";
import { setLocalStorage } from "../utils/localSorage";

const useCart = (initialState) => {
    const [cartList, setCartList] = useState(initialState);

    const handleCart = (product, fucn, number) => {
        const newCartList = fucn(product, number);
        
        setCartList(newCartList);
        setLocalStorage("cartList", newCartList);
    }

    return [cartList, handleCart];
}

export { useCart };