import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { site } from "@/config/site";

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-800">
          {site.tagline}
        </h1>
        <p className="text-stone-500 mt-4 max-w-xl mx-auto">{site.intro}</p>
        <Link
          href="/proizvodi"
          className="inline-block mt-8 bg-stone-800 text-white px-8 py-3 rounded-full hover:bg-gold transition-colors"
        >
          Pogledaj kolekciju
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-serif text-2xl mb-6">Izdvojeno</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="font-serif text-2xl mb-6">Kategorije</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/proizvodi?kategorija=${c.slug}`}
              className="rounded-xl border border-stone-200 bg-cream px-6 py-8 text-center font-serif text-xl hover:border-gold hover:text-gold transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}