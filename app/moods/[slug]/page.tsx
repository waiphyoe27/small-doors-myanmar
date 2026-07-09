import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { allGuides } from "@/data/allGuides";
import { moods } from "@/data/moods";
import { findGuideItem } from "@/lib/guide";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return moods.map((mood) => ({ slug: mood.slug }));
}

export default async function MoodDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = findGuideItem(moods, slug);

  if (!item) {
    notFound();
  }

  return <ArticleLayout item={item} backHref="/moods" backLabel="Back to Travel Moods" allItems={allGuides} />;
}
