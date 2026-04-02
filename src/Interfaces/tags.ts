export const TAGS = {
    PRODUCT: {
        BOXING_GLOVES: "boxing-gloves",
        BOXING_GEAR: "boxing-gear",
        BOXING_EQUIPMENT: "boxing-equipment",
        HAND_WRAPS: "hand-wraps",
    },
    USE_CASE: {
        BEGINNERS: "beginners",
        HEAVY_BAG: "heavy-bag",
        SPARRING: "sparring",
        TRAINING: "training",
    },
    PRICE: {
        BUDGET: "budget",
        UNDER_100: "under-100",
    },

    CONTENT: {
        REVIEW: "review",
        GEAR_GUIDE: "gear-guide",
        COMPARISON: "comparison"
    },
    
    ATTRIBUTES: {
        GLOVE_SIZES: "glove-sizes",
        SMALL_HANDS: "small-hands",
    }

} as const;

type NestedValueOf<T> = {
  [K in keyof T]: T[K] extends object ? T[K][keyof T[K]] : T[K]
}[keyof T];

export type Tag = NestedValueOf<typeof TAGS>;