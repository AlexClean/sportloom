import { reviewData as bestBoxingGlovesForBeginners2025 } from "@/content/reviews/best-boxing-gloves-for-beginners-2025/data";
import { reviewData as bestBoxingGlovesForHeavyBag2025 } from "@/content/reviews/best-boxing-gloves-for-heavy-bag-2025/data";
import { reviewData as bestBoxingGlovesForSparring2026 } from "@/content/reviews/best-boxing-gloves-for-sparring-2026/data";
import {reviewData as bestBoxingGloves2025 } from "@/content/reviews/best-boxing-gloves-2025/data";
import { ReviewPageData } from "@/Interfaces/reviewTypes";

export const REVIEW_DATA_INDEX: Record<string, ReviewPageData> = 
    {
        [bestBoxingGloves2025.slug]: bestBoxingGloves2025,
        [bestBoxingGlovesForBeginners2025.slug]: bestBoxingGlovesForBeginners2025,
        [bestBoxingGlovesForHeavyBag2025.slug]: bestBoxingGlovesForHeavyBag2025,
        [bestBoxingGlovesForSparring2026.slug]: bestBoxingGlovesForSparring2026,
    }