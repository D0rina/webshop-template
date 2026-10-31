"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { products } from "@/data/products";

const CartContext = createContext();
const STORAGE_KEY = "webshop-cart";

// U košarici se pamte samo slug i količina; naziv, cijena i slika uvijek
// se čitaju iz products.js, pa promjena cijene odmah vrijedi i u košarici.
export function CartProvider({ children }) {
    const [lines, setLines] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // učitaj spremljenu košaricu nakon prvog prikaza
    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            if (Array.isArray(saved)) setLines(saved);
        } catch {
            // neispravan zapis - kreni s praznom košaricom
        }
        setLoaded(true);
    }, []);

    // spremi svaku promjenu
    useEffect(() => {
        if (!loaded) return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
        } catch {
            // spremanje nije dostupno (npr. privatni način rada)
        }
    }, [lines, loaded]);

    function addToCart(product) {
        setLines((prev) => {
            const existing = prev.find((l) => l.slug === product.slug);
            if (existing) {
                return prev.map((l) =>
                    l.slug === product.slug ? { ...l, qty: l.qty + 1 } : l
                );
            }
            return [...prev, { slug: product.slug, qty: 1 }];
        });
    }

    function removeFromCart(slug) {
        setLines((prev) => prev.filter((l) => l.slug !== slug));
    }

    function updateQty(slug, qty) {
        if (qty < 1) return;
        setLines((prev) => prev.map((l) => (l.slug === slug ? { ...l, qty } : l)));
    }

    // spoji stavke košarice s podacima o proizvodima
    const items = lines
        .map((l) => {
            const product = products.find((p) => p.slug === l.slug);
            return product ? { ...product, qty: l.qty } : null;
        })
        .filter(Boolean);

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