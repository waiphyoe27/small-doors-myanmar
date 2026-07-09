import { GuideCard } from "@/components/GuideCard";
import { SectionHeading } from "@/components/SectionHeading";
import { cultureNotes } from "@/data/cultureNotes";
import { itemPath } from "@/lib/guide";

export default function CulturePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Culture Notes"
        title="Local ways of seeing"
        description="Short, careful notes for moving through Myanmar with more context and respect."
      />
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {cultureNotes.map((note) => (
          <GuideCard key={note.slug} item={note} href={itemPath("/culture", note)} />
        ))}
      </div>
    </section>
  );
}
