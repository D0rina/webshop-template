import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }) {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) return notFound();

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
                <button className="mt-8 bg-stone-800 text-white px-8 py-3 rounded-full hover:bg-gold transition-colors">
                    Dodaj u košaricu
                </button>
            </div>
        </section>
    );
}