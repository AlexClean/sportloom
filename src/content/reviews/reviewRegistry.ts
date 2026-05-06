import { reviewData as bestBoxingGlovesForBeginners2025 } from "@/content/reviews/best-boxing-gloves-for-beginners-2025/data";
import { reviewData as bestBoxingGlovesForHeavyBag2025 } from "@/content/reviews/best-boxing-gloves-for-heavy-bag-2025/data";
import { reviewData as bestBoxingGlovesForSparring2026 } from "@/content/reviews/best-boxing-gloves-for-sparring-2026/data";
import {reviewData as bestBoxingGloves2025 } from "@/content/reviews/best-boxing-gloves-2025/data";
import { reviewData as bestBoxingUnder100 } from "./best-boxing-gloves-under-100/data";
import { reviewData as bestBoxingGlovesForTraining } from "@/content/boxing/gloves/best-boxing-gloves-for-training/data";
import { ReviewPageData } from "@/Interfaces/reviewTypes";
import { bestBoxingHeadgearForSparring2026 } from "../boxing/headgear/best-boxing-headgear-for-sparring-2026/data";
import { reviewData as bestBoxingGlovesForBeginnersWomen} from "@/content/boxing/gloves/best-boxing-gloves-for-begginers-women/data";

export const REVIEW_DATA_INDEX: Record<string, ReviewPageData> = 
    {
        [bestBoxingGloves2025.slug]: bestBoxingGloves2025,
        [bestBoxingGlovesForBeginners2025.slug]: bestBoxingGlovesForBeginners2025,
        [bestBoxingGlovesForHeavyBag2025.slug]: bestBoxingGlovesForHeavyBag2025,
        [bestBoxingGlovesForSparring2026.slug]: bestBoxingGlovesForSparring2026,
        [bestBoxingGlovesForTraining.slug]: bestBoxingGlovesForTraining,
        [bestBoxingUnder100.slug]: bestBoxingUnder100,
        [bestBoxingHeadgearForSparring2026.slug]: bestBoxingHeadgearForSparring2026,
        [bestBoxingGlovesForBeginnersWomen.slug]: bestBoxingGlovesForBeginnersWomen,
    }