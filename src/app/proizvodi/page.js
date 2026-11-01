import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, categories, getCategory } from "@/data/products";

export const metadata = { title: "Proizvodi" };

export default async function ProizvodiPage({ searchParams }) {
    const { kategorija } = await searchParams;
    const active = getCategory(kategorija);
    const list = active ? products.filter((p) => p.category === active.slug) : products;

    const filters = [{ slug: null, name: "Sve" }, ...categories];

    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="font-serif text-3xl mb-8">{active ? active.name : "Svi proizvodi"}</h1>

            <nav className="flex flex-wrap gap-3 mb-10" aria-label="Kategorije">
                {filters.map((c) => {
                    const isActive = (active?.slug ?? null) === c.slug;
                    return (
                        <Link
                            key={c.name}
                            href={c.slug ? `/proizvodi?kategorija=${c.slug}` : "/proizvodi"}
                            className={`px-5 py-2 rounded-full border text-sm transition-colors ${isActive
                                    ? "bg-stone-800 border-stone-800 text-white"
                                    : "border-stone-300 text-stone-600 hover:border-gold hover:text-gold"
                                }`}
                        >
                            {c.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {list.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                ))}
            </div>
        </section>
    );
}