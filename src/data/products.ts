
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
  "adidas-speed-tilt-350": {
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
};


export function getSpecsByKey(key: string) {
  return PRODUCT_SPECS[key]?.specs ?? {};
}
export function getAffiliateByKey(key: string) {
  return PRODUCT_SPECS[key]?.url ?? "#";
}
