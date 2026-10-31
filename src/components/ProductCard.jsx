import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/format";

export default function ProductCard({ product }) {
    return (
        <Link href={`/proizvodi/${product.slug}`} className="group block">
            <div className="aspect-square bg-stone-100 overflow-hidden rounded-xl">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="font-serif text-lg mt-3">{product.name}</h3>
            <p className="text-gold font-medium">{formatPrice(product.price)}</p>
        </Link>
    );
}