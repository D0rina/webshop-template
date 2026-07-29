import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-800">
          Ručno izrađeno, s pažnjom
        </h1>
        <p className="text-stone-500 mt-4 max-w-xl mx-auto">
          Otkrijte kolekciju jedinstvenih komada izrađenih od prirodnih materijala.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="font-serif text-2xl mb-6">Izdvojeno</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}