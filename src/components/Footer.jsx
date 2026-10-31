import { site } from "@/config/site";

export default function Footer() {
    return (
        <footer className="border-t border-stone-200 mt-20 bg-cream">
            <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-stone-500 flex flex-col md:flex-row justify-between gap-4">
                <p>© {new Date().getFullYear()} {site.name}. Sva prava pridržana.</p>
                <div className="flex gap-6">
                    <a href={site.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                        Instagram
                    </a>
                    <a href={`mailto:${site.contact.email}`} className="hover:text-gold">
                        Kontakt
                    </a>
                </div>
            </div>
        </footer>
    );
}