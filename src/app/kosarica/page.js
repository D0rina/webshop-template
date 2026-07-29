"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function KosaricaPage() {
    const { items, removeFromCart, updateQty, total } = useCart();

    if (items.length === 0) {
        return (
            <section className="max-w-3xl mx-auto px-6 py-16 text-center">
                <h1 className="font-serif text-3xl mb-6">Košarica</h1>
                <p className="text-stone-500">Vaša košarica je trenutno prazna.</p>
                <Link href="/proizvodi" className="inline-block mt-6 text-gold underline">
                    Pogledaj proizvode
                </Link>
            </section>
        );
    }

    return (
        <section className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="font-serif text-3xl mb-10">Košarica</h1>

            <div className="flex flex-col gap-6">
                {items.map((item) => (
                    <div key={item.slug} className="flex items-center gap-4 border-b border-stone-200 pb-6">
                        <div className="w-20 h-20 bg-stone-100 rounded-lg overflow-hidden shrink-0">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={100}
                                height={100}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="font-serif text-lg">{item.name}</h3>
                            <p className="text-gold">{item.price.toFixed(2)} €</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() =>
                                    item.qty === 1
                                        ? removeFromCart(item.slug)
                                        : updateQty(item.slug, item.qty - 1)
                                }
                                className="w-8 h-8 border border-stone-300 rounded-full hover:bg-stone-100"
                            >
                                −
                            </button>
                            <span className="w-6 text-center">{item.qty}</span>
                            <button
                                onClick={() => updateQty(item.slug, item.qty + 1)}
                                className="w-8 h-8 border border-stone-300 rounded-full hover:bg-stone-100"
                            >
                                +
                            </button>
                        </div>

                        <p className="w-20 text-right font-medium">
                            {(item.price * item.qty).toFixed(2)} €
                        </p>

                        <button
                            onClick={() => removeFromCart(item.slug)}
                            className="text-stone-400 hover:text-red-500 ml-2"
                            aria-label="Ukloni"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-10 pt-6 border-t border-stone-300">
                <span className="font-serif text-xl">Ukupno</span>
                <span className="font-serif text-xl text-gold">{total.toFixed(2)} €</span>
            </div>

            <button className="mt-8 w-full bg-stone-800 text-white py-3 rounded-full hover:bg-gold transition-colors">
                Nastavi na plaćanje
            </button>
        </section>
    );
}