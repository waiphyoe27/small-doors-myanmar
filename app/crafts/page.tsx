import { GuideCard } from "@/components/GuideCard";
import { EmptyShelf } from "@/components/EmptyShelf";
import { SectionHeading } from "@/components/SectionHeading";
import { crafts } from "@/data/crafts";
import { itemPath } from "@/lib/guide";

export default function CraftsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Crafts"
        title="Made by hand"
        description="A quiet place for workshops, materials, heirloom objects, and patient techniques."
      />
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {crafts.map((craft) => (
          <GuideCard key={craft.slug} item={craft} href={itemPath("/crafts", craft)} />
        ))}
      </div>
      <EmptyShelf label="Coming shelf" text="More craft cards are coming soon: weaving, silverwork, puppets, paper, baskets, and regional textiles." />
    </section>
  );
}
