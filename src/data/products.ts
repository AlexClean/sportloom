
export const PRODUCT_SPECS: Record<string, {
  title: string;
  url: string;
  specs: {
    weights?: string;
    material?: string;
    closure?: string;
    fit?: string;
    bestFor?: string;
  };
}> = {
  "hayabusa-s4": {
    title: "Hayabusa S4",
    url: "https://amzn.to/4mGDSbN",
    specs: {
      weights: "10–16 oz",
      material: "PU (synthetic) leather, molded foam",
      closure: "Velcro",
      fit: "Comfort-first, intuitive hand position",
      bestFor: "Beginners, bag & technique work",
    },
  },
  "venum-challenger-2": {
    title: "Venum Challenger 2.0",
    url: "https://amzn.to/4mzheSu",
    specs: {
      weights: "10–16 oz",
      material: "Synthetic leather",
      closure: "Velcro",
      fit: "Snug in 10–12 oz, wider in 14–16",
      bestFor: "Bag work, mitts, light sparring",
    },
  },
  "everlast-powerlock-2": {
    title: "Everlast Powerlock 2",
    url: "https://amzn.to/4fAkzyx",
    specs: {
      weights: "12–16 oz",
      material: "Engineered leather, layered foam",
      closure: "Velcro",
      fit: "Structured, denser feel",
      bestFor: "Wrist support, bag & pad work",
    },
  },
  "adidas-speed-tilt-150": {
    title: "Adidas Speed TILT 150",
    url: "https://amzn.to/45vQknP",
    specs: {
      weights: "12–16 oz",
      material: "Synthetic leather, multi-layer foam",
      closure: "Velcro",
      fit: "Neutral-to-slim profile",
      bestFor: "Speed, pads, technique drills",
    },
  },
  "hayabusa-t3": {
    title: "Hayabusa T3",
    url: "https://amzn.to/41LrDCJ",
    specs: {
      weights: "12–16 oz",
      material: "Vylar engineered leather",
      closure: "Dual-X Velcro",
      fit: "Snug, pre-curved hand position",
      bestFor: "Heavy bag work, all-around training",
    },
  },
  "rival-rfx-guerrero": {
    title: "RIVAL Boxing RFX-Guerrero Intelli-Shock 2.0",
    url: "https://amzn.to/4pfK6kO",
    specs: {
      weights: "10–16 oz",
      material: "Premium leather",
      closure: "Velcro / Lace-up",
      fit: "Slim, pro-style fit",
      bestFor: "Feedback, precision, bag work",
    },
  },
  "title-gel-world": {
    title: "TITLE Boxing Gel World Bag Gloves",
    url: "https://amzn.to/41NVqdZ",
    specs: {
      weights: "12–16 oz",
      material: "Leather with Gel lining",
      closure: "Velcro",
      fit: "Supportive, gel-cushioned",
      bestFor: "Heavy bag training, durability",
    },
  },
  "everlast-elite-2": {
    title: "Everlast Elite 2 Boxing Gloves",
    url: "https://amzn.to/3Ih1l4B",
    specs: {
      weights: "12–16 oz",
      material: "Synthetic leather",
      closure: "E-Z Hook & Loop",
      fit: "Compact, ergonomic",
      bestFor: "All-around bag & mitts training",
    },
  },
  "adidas-tilt-350-pro": {
    title: "Adidas Tilt 350 PRO Training Gloves",
    url: "https://amzn.to/3JXRNvU",
    specs: {
      weights: "12–16 oz",
      material: "High-end synthetic, multi-layer foam",
      closure: "Velcro",
      fit: "Balanced, pro training profile",
      bestFor: "Advanced bag & sparring sessions",
    },
  },
  "rival-rb11-evolution": {
  title: "Rival RB11 Evolution Bag Gloves",
  url: "https://amzn.to/47fLdsO",
  specs: {
    weights: "10-14",
    material: "Super-Rich Microfibre PU",
    closure: "Rival V-Strap Wrist-Lock 2 System",
    fit: "Ergonomic fit, 15° angle cuff",
    bestFor: "Intense bag use, punch mitts only",
  },
},
"winning-ms-600": {
  title: "Winning MS-600 16 oz Training Gloves",
  url: "https://amzn.to/4hiYkOp",
  specs: {
    weights: "8–16 oz",
    material: "Genuine cowhide leather",
    closure: "Hook-and-Loop (Velcro)",
    fit: "Anatomical shape, anti-thumbing style",
    bestFor: "Sparring, all-around training",
  },
},
"ringside-apex": {
  "title": "Ringside Apex Bag Gloves",
  "url": "https://amzn.to/3J6xrRc",
  "specs": {
    "weights": "8 oz, 12 oz",
    "material": "Durable synthetic leather",
    "closure": "Tapered hook-and-loop wrap-around",
    "fit": "Pre-curved shape, moisture-wicking lining",
    "bestFor": "Bag work, fitness boxing",
  },
},
"cleto-reyes-training": {
  "title": "Cleto Reyes Hook & Loop Training Gloves",
  "url": "https://amzn.to/48E9TgP",
  "specs": {
    "weights": "12–18 oz",
    "material": "Top-grain cowhide leather",
    "closure": "Hook and Loop Closure (Velcro)",
    "fit": "Anatomically designed, attached thumb",
    "bestFor": "Heavy bags, sparring, all-around training",
  },
}
};


export function getSpecsByKey(key: string) {
  return PRODUCT_SPECS[key]?.specs ?? {};
}
export function getAffiliateByKey(key: string) {
  return PRODUCT_SPECS[key]?.url ?? "#";
}
