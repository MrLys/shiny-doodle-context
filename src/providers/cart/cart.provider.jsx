import React, { createContext, useState, useEffect } from "react";
import {
    addItemToCart,
    filterItemFromCart,
    getItemsCount,
    getItemsTotal,
    removeItemFromCart
} from "../../redux/cart/cart.utils";

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    total: 0
});
const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [total, setTotal] = useState(0);

    const addItem = (item) => setCartItems(addItemToCart(cartItems, item))
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item))
    const clearItem = (item) => setCartItems(filterItemFromCart(cartItems, item))
    const toggleHidden = () => setHidden(!hidden);
    useEffect(() => {
        setCartItemsCount(getItemsCount(cartItems))
    },[cartItems]);
    useEffect(() => {
        setTotal(getItemsTotal(cartItems));
    },[cartItems])

    return <CartContext.Provider value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        cartItemsCount,
        clearItem,
        removeItem,
        total
    }}>{children}</CartContext.Provider>
}
export default CartProvider;
