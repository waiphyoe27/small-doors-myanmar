import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { allGuides } from "@/data/allGuides";
import { foods } from "@/data/foods";
import { findGuideItem } from "@/lib/guide";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return foods.map((food) => ({ slug: food.slug }));
}

export default async function FoodDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = findGuideItem(foods, slug);

  if (!item) {
    notFound();
  }

  return <ArticleLayout item={item} backHref="/food" backLabel="Back to Food" allItems={allGuides} />;
}
