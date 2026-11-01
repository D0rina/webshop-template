"use client";
import Image from "next/image";
import Link from "next/link";
import { products, getCategory } from "@/data/products";
import { notFound } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { useState, use } from "react";

export default function ProductPage({ params }) {
    const { slug } = use(params);
    const product = products.find((p) => p.slug === slug);
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    if (!product) return notFound();
    const category = getCategory(product.category);

    function handleAdd() {
        addToCart(product);
        setAdded(true);
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
                    priority
                />
            </div>
            <div>
                <Link
                    href={category ? `/proizvodi?kategorija=${category.slug}` : "/proizvodi"}
                    className="text-sm text-stone-500 hover:text-gold"
                >
                    ← {category ? category.name : "Svi proizvodi"}
                </Link>
                <h1 className="font-serif text-3xl mt-4">{product.name}</h1>
                <p className="text-gold text-xl mt-2">{formatPrice(product.price)}</p>
                <p className="text-stone-600 mt-6">{product.description}</p>
                <button
                    onClick={handleAdd}
                    className="mt-8 bg-stone-800 text-white px-8 py-3 rounded-full hover:bg-gold transition-colors"
                >
                    {added ? "Dodaj još jedan" : "Dodaj u košaricu"}
                </button>

                {added && (
                    <div className="mt-6 flex items-center justify-between gap-4 rounded-xl border border-gold/40 bg-cream px-5 py-4">
                        <p className="text-stone-700">✓ Proizvod je dodan u košaricu.</p>
                        <Link href="/kosarica" className="text-gold font-medium underline whitespace-nowrap">
                            Pogledaj košaricu
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}