export type GuideItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  oneLineFeeling: string;
  whyGo?: string;
  image?: string;
  region?: string;
  city?: string;
  idealTime?: string;
  mood?: string;
  estimatedVisitLength?: string;
  tripStyle?: string;
  isGoodForFirstTrip?: boolean;
  isComingSoon?: boolean;
  bestFor: string;
  dontMiss: string;
  taste: string;
  localNote: string;
  softItinerary: string;
  bringHome: string;
  storyCorner: string;
};

export type GuideSection = {
  href: string;
  title: string;
  eyebrow: string;
  description: string;
};

export const DEFAULT_GUIDE_IMAGE = "/images/default-guide.jpg";

export const CATEGORY_DEFAULT_IMAGES: Record<string, string> = {
  Places: "/images/default-guide.jpg",
  "Culture Notes": "/images/default-guide.jpg",
  Food: "/images/food/default.jpg",
  Crafts: "/images/crafts/default.jpg",
  "Travel Moods": "/images/moods/default.jpg",
};

export function findGuideItem(items: GuideItem[], slug: string) {
  return items.find((item) => item.slug === slug);
}

export function itemPath(basePath: string, item: GuideItem) {
  return `${basePath}/${item.slug}`;
}

export function categoryBasePath(category: string) {
  const paths: Record<string, string> = {
    Places: "/places",
    "Culture Notes": "/culture",
    Food: "/food",
    Crafts: "/crafts",
    "Travel Moods": "/moods",
  };

  return paths[category] ?? "/";
}

export function guideHref(item: GuideItem) {
  return itemPath(categoryBasePath(item.category), item);
}

export function guideImage(item: GuideItem) {
  return item.image ?? CATEGORY_DEFAULT_IMAGES[item.category] ?? DEFAULT_GUIDE_IMAGE;
}

export function guideChips(item: GuideItem, limit = 4) {
  const chips = [
    item.region,
    item.city,
    item.idealTime,
    item.mood,
    item.estimatedVisitLength,
    item.tripStyle,
    item.isGoodForFirstTrip ? "First trip" : undefined,
    item.isComingSoon ? "Guide in progress" : undefined,
  ];

  return chips.filter(Boolean).slice(0, limit) as string[];
}

export function relatedGuides(current: GuideItem, allItems: GuideItem[], limit = 3) {
  const others = allItems.filter((item) => item.slug !== current.slug);
  const sameCategory = others.filter((item) => item.category === current.category);
  const mixed = others.filter((item) => item.category !== current.category);

  return [...sameCategory, ...mixed].slice(0, limit);
}
