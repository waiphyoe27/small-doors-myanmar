import { GuideCard } from "@/components/GuideCard";
import { EmptyShelf } from "@/components/EmptyShelf";
import { SectionHeading } from "@/components/SectionHeading";
import { moods } from "@/data/moods";
import { itemPath } from "@/lib/guide";

export default function MoodsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Travel Moods"
        title="Ways to wander"
        description="Soft travel moods for shaping a day around feeling, weather, craft, river light, or a slower rhythm."
      />
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {moods.map((mood) => (
          <GuideCard key={mood.slug} item={mood} href={itemPath("/moods", mood)} />
        ))}
      </div>
      <EmptyShelf label="Coming shelf" text="More moods are coming soon: temple mornings, monsoon afternoons, tea-shop walks, market starts, and craft days." />
    </section>
  );
}
