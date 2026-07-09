import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { allGuides } from "@/data/allGuides";
import { places } from "@/data/places";
import { findGuideItem } from "@/lib/guide";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }));
}

export default async function PlaceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = findGuideItem(places, slug);

  if (!item) {
    notFound();
  }

  return <ArticleLayout item={item} backHref="/places" backLabel="Back to Places" allItems={allGuides} />;
}
