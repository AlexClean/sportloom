import { ReviewMeta } from "@/Interfaces/reviewTypes";
import { bestBoxingGloves2025 } from "./best-boxing-gloves-2025/meta";
import { bestBoxingGlovesForBeginners2025 } from "./best-boxing-gloves-for-beginners-2025/meta";
import { bestBoxingGlovesForHeavyBag2025 } from "./best-boxing-gloves-for-heavy-bag-2025/meta";
import { bestBoxingGlovesForSparring2026 } from "./best-boxing-gloves-for-sparring-2026/meta";
import { bestBoxingGlovesUnder100 } from "./best-boxing-gloves-under-100/meta";

export const REVIEW_META = [
    {
        slug: bestBoxingGloves2025.slug,
        meta: bestBoxingGloves2025,
    },
    {
        slug: bestBoxingGlovesForBeginners2025.slug,
        meta: bestBoxingGlovesForBeginners2025,
    },
    {
        slug: bestBoxingGlovesForHeavyBag2025.slug,
        meta: bestBoxingGlovesForHeavyBag2025,
    },
    {
        slug: bestBoxingGlovesForSparring2026.slug,
        meta: bestBoxingGlovesForSparring2026,
    },
    {
        slug: bestBoxingGlovesUnder100.slug,
        meta: bestBoxingGlovesUnder100
    }
]

export const REVIEW_META_INDEX: Record<string, ReviewMeta> = {
    [bestBoxingGloves2025.slug]: bestBoxingGloves2025,
    [bestBoxingGlovesForBeginners2025.slug]: bestBoxingGlovesForBeginners2025,
    [bestBoxingGlovesForHeavyBag2025.slug]: bestBoxingGlovesForHeavyBag2025,
    [bestBoxingGlovesForSparring2026.slug]: bestBoxingGlovesForSparring2026,
    [bestBoxingGlovesUnder100.slug]: bestBoxingGlovesUnder100
}