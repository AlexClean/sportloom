import { reviewData as bestBoxingGlovesForSparring2026 } from "@/content/reviews/best-boxing-gloves-for-sparring-2026/data";
import {reviewData as bestBoxingGloves2025 } from "@/content/reviews/best-boxing-gloves-2025/data";
import { reviewData as bestBoxingUnder100 } from "./best-boxing-gloves-under-100/data";
import { reviewData as bestBoxingGlovesForTraining } from "@/content/boxing/gloves/best-boxing-gloves-for-training/data";
import { ReviewPageData } from "@/Interfaces/reviewTypes";
import { bestBoxingHeadgearForSparring2026 } from "../boxing/headgear/best-boxing-headgear-for-sparring-2026/data";
import { reviewData as bestBoxingGlovesForBeginnersWomen} from "@/content/boxing/gloves/best-boxing-gloves-for-begginers-women/data";
import { reviewData as bestBoxingGlovesForSmallHands} from "@/content/boxing/gloves/best-boxing-gloves-for-small-hands/data";
import { reviewData as bestBoxingGlovesForHeavyBag} from "@/content/boxing/gloves/best-boxing-gloves-for-heavy-bag/data";
import { reviewData as bestBoxingGlovesForWristSupport} from "@/content/boxing/gloves/best-boxing-gloves-for-wrist-support/data";
import { reviewData as bestBoxingShoesForBeginners } from "@/content/boxing/shoes/best-boxing-shoes-for-beginners/data";
import { bestBoxingGlovesForBeginners} from "@/content/boxing/gloves/best-boxing-gloves-for-beginners/data";
import { bestBoxingBagGloves } from "../boxing/gloves/best-boxing-bag-gloves/data";
import { bestBoxingGlovesForWideHands } from "../boxing/gloves/best-boxing-gloves-for-wide-hands/data";
import { bestBoxingGlovesForLongFingers } from "../boxing/gloves/best-boxing-gloves-for-long-fingers/data";
import { bestBoxingGlovesForKids } from "../boxing/gloves/best-boxing-gloves-for-kids/data";
import { bestBoxingShoesUnder100 } from "../boxing/shoes/best-boxing-shoes-under-100/data";
import { bestBoxingShoesForWideFeet } from "../boxing/shoes/best-boxing-shoes-for-wide-feet/data";

export const REVIEW_DATA_INDEX: Record<string, ReviewPageData> = 
    {
        [bestBoxingGloves2025.slug]: bestBoxingGloves2025,
        [bestBoxingGlovesForSparring2026.slug]: bestBoxingGlovesForSparring2026,
        [bestBoxingGlovesForTraining.slug]: bestBoxingGlovesForTraining,
        [bestBoxingUnder100.slug]: bestBoxingUnder100,
        [bestBoxingHeadgearForSparring2026.slug]: bestBoxingHeadgearForSparring2026,
        [bestBoxingGlovesForBeginnersWomen.slug]: bestBoxingGlovesForBeginnersWomen,
        [bestBoxingGlovesForSmallHands.slug]: bestBoxingGlovesForSmallHands,
        [bestBoxingGlovesForHeavyBag.slug]: bestBoxingGlovesForHeavyBag,
        [bestBoxingGlovesForWristSupport.slug]: bestBoxingGlovesForWristSupport,
        [bestBoxingShoesForBeginners.slug]: bestBoxingShoesForBeginners,
        [bestBoxingGlovesForBeginners.slug]: bestBoxingGlovesForBeginners,
        [bestBoxingBagGloves.slug]: bestBoxingBagGloves,
        [bestBoxingGlovesForWideHands.slug]: bestBoxingGlovesForWideHands,
        [bestBoxingGlovesForLongFingers.slug] : bestBoxingGlovesForLongFingers,
        [bestBoxingGlovesForKids.slug]: bestBoxingGlovesForKids,
        [bestBoxingShoesUnder100.slug]: bestBoxingShoesUnder100,
        [bestBoxingShoesForWideFeet.slug]: bestBoxingShoesForWideFeet
    }