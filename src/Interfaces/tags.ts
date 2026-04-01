export const TAGS = {
    BOXING_GLOVES: "boxing-gloves",
    BOXING_GEAR: "boxing-gear",
    BOXING_EQUIPMENT: "boxing-equipment",
    GLOVE_SIZES: "glove-sizes",
    BEGINNERS: "beginners",
    HEAVY_BAG: "heavy-bag",
    SPARRING: "sparring",
    TRAINING: "training",
    HAND_WRAPS: "hand-wraps",
    BUDGET: "budget",
    UNDER_100: "under-100",
    GEAR_GUIDE: "gear-guide",
} as const;

export type Tag = typeof TAGS[keyof typeof TAGS];