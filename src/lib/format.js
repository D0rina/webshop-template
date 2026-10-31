import { site } from "@/config/site";

const priceFormatter = new Intl.NumberFormat(site.locale, {
    style: "currency",
    currency: site.currency,
});

// 24.9 -> "24,90 €"
export function formatPrice(amount) {
    return priceFormatter.format(amount);
}