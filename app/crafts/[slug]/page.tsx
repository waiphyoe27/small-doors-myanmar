import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { allGuides } from "@/data/allGuides";
import { crafts } from "@/data/crafts";
import { findGuideItem } from "@/lib/guide";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return crafts.map((craft) => ({ slug: craft.slug }));
}

export default async function CraftDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = findGuideItem(crafts, slug);

  if (!item) {
    notFound();
  }

  return <ArticleLayout item={item} backHref="/crafts" backLabel="Back to Crafts" allItems={allGuides} />;
}
