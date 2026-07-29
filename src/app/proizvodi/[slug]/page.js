"use client";
import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useState, use } from "react";

export default function ProductPage({ params }) {
    const { slug } = use(params);
    const product = products.find((p) => p.slug === slug);
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    if (!product) return notFound();

    function handleAdd() {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    }

    return (
        <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
            <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={700}
                    height={700}
                    className="object-cover w-full h-full"
                />
            </div>
            <div>
                <h1 className="font-serif text-3xl">{product.name}</h1>
                <p className="text-gold text-xl mt-2">{product.price.toFixed(2)} €</p>
                <p className="text-stone-600 mt-6">{product.description}</p>
                <button
                    onClick={handleAdd}
                    className="mt-8 bg-stone-800 text-white px-8 py-3 rounded-full hover:bg-gold transition-colors"
                >
                    {added ? "Dodano ✓" : "Dodaj u košaricu"}
                </button>
            </div>
        </section>
    );
}