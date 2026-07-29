"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    function addToCart(product) {
        setItems((prev) => {
            const existing = prev.find((i) => i.slug === product.slug);
            if (existing) {
                return prev.map((i) =>
                    i.slug === product.slug ? { ...i, qty: i.qty + 1 } : i
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
    }

    function removeFromCart(slug) {
        setItems((prev) => prev.filter((i) => i.slug !== slug));
    }

    function updateQty(slug, qty) {
        if (qty < 1) return;
        setItems((prev) =>
            prev.map((i) => (i.slug === slug ? { ...i, qty } : i))
        );
    }

    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const count = items.reduce((sum, i) => sum + i.qty, 0);

    return (
        <CartContext.Provider
            value={{ items, addToCart, removeFromCart, updateQty, total, count }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}