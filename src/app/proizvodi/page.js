import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProizvodiPage() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="font-serif text-3xl mb-10">Svi proizvodi</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {products.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                ))}
            </div>
        </section>
    );
}