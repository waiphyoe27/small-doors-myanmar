import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { allGuides } from "@/data/allGuides";
import { cultureNotes } from "@/data/cultureNotes";
import { findGuideItem } from "@/lib/guide";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cultureNotes.map((note) => ({ slug: note.slug }));
}

export default async function CultureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = findGuideItem(cultureNotes, slug);

  if (!item) {
    notFound();
  }

  return <ArticleLayout item={item} backHref="/culture" backLabel="Back to Culture Notes" allItems={allGuides} />;
}
