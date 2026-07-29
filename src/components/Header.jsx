"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "/", label: "Naslovna" },
        { href: "/proizvodi", label: "Proizvodi" },
        { href: "/kosarica", label: "Košarica" },
    ];

    return (
        <header className="border-b border-stone-200 bg-cream sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="font-serif text-2xl tracking-wide text-stone-800">
                    Naziv Trgovine
                </Link>

                <nav className="hidden md:flex gap-8 text-sm tracking-wide uppercase">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href} className="hover:text-gold transition-colors">
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <button
                    className="md:hidden text-stone-700"
                    onClick={() => setOpen(!open)}
                    aria-label="Izbornik"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {open && (
                <nav className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm uppercase tracking-wide">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                            {l.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
