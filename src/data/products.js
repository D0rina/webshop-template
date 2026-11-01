// =====================================================================
// Kategorije i proizvodi - za novog klijenta zamijeni ove podatke
// Slike idu u public/images/products/ (kvadratne, oko 1000x1000 px)
// =====================================================================

export const categories = [
    { slug: "narukvice", name: "Narukvice" },
    { slug: "ogrlice", name: "Ogrlice" },
    { slug: "nausnice", name: "Naušnice" },
];

export const products = [
    // --- Narukvice ---
    {
        slug: "narukvica-luna",
        name: "Narukvica Luna",
        category: "narukvice",
        price: 24.9,
        featured: true,
        image: "/images/products/narukvica-luna.jpg",
        description: "Ručno nizana narukvica od prirodnog kamena, na elastičnoj niti koja pristaje svakom zapešću.",
    },
    {
        slug: "narukvica-sol",
        name: "Narukvica Sol",
        category: "narukvice",
        price: 19.9,
        image: "/images/products/narukvica-sol.jpg",
        description: "Tanka pozlaćena narukvica za svakodnevno nošenje, lijepa sama ili u kombinaciji s drugima.",
    },
    {
        slug: "narukvica-mare",
        name: "Narukvica Mare",
        category: "narukvice",
        price: 22.9,
        image: "/images/products/narukvica-mare.jpg",
        description: "Perlice u nijansama mora i pijeska, inspirirane ljetom na Kvarneru.",
    },

    // --- Ogrlice ---
    {
        slug: "ogrlica-terra",
        name: "Ogrlica Terra",
        category: "ogrlice",
        price: 39.9,
        featured: true,
        image: "/images/products/ogrlica-terra.jpg",
        description: "Minimalistička ogrlica s ručno oblikovanim keramičkim medaljonom.",
    },
    {
        slug: "ogrlica-flora",
        name: "Ogrlica Flora",
        category: "ogrlice",
        price: 34.9,
        image: "/images/products/ogrlica-flora.jpg",
        description: "Privjesak s pravim prešanim cvijetom zaštićenim prozirnom smolom. Svaki komad je jedinstven.",
    },
    {
        slug: "ogrlica-nova",
        name: "Ogrlica Nova",
        category: "ogrlice",
        price: 29.9,
        image: "/images/products/ogrlica-nova.jpg",
        description: "Nježan lančić s malim privjeskom u obliku zvijezde.",
    },

    // --- Naušnice ---
    {
        slug: "nausnice-aura",
        name: "Naušnice Aura",
        category: "nausnice",
        price: 19.9,
        featured: true,
        image: "/images/products/nausnice-aura.jpg",
        description: "Lagane naušnice s pozlaćenim detaljima, udobne za cijeli dan.",
    },
    {
        slug: "nausnice-kap",
        name: "Naušnice Kap",
        category: "nausnice",
        price: 16.9,
        image: "/images/products/nausnice-kap.jpg",
        description: "Viseće naušnice u obliku kapi, ručno oblikovane i glazirane.",
    },
    {
        slug: "nausnice-lis",
        name: "Naušnice Lis",
        category: "nausnice",
        price: 21.9,
        image: "/images/products/nausnice-lis.jpg",
        description: "Naušnice u obliku lista s finom teksturom prirodnih žilica.",
    },
];

export function getCategory(slug) {
    return categories.find((c) => c.slug === slug);
}