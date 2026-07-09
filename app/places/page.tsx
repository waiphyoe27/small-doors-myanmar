import { GuideCard } from "@/components/GuideCard";
import { SectionHeading } from "@/components/SectionHeading";
import { places } from "@/data/places";
import { itemPath } from "@/lib/guide";

export default function PlacesPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Places"
        title="Cities, plains, lakes"
        description="Start with a few generous introductions to Myanmar places that reward patient attention."
      />
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {places.map((place) => (
          <GuideCard key={place.slug} item={place} href={itemPath("/places", place)} />
        ))}
      </div>
    </section>
  );
}
