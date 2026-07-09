import { GuideCard } from "@/components/GuideCard";
import { EmptyShelf } from "@/components/EmptyShelf";
import { SectionHeading } from "@/components/SectionHeading";
import { foods } from "@/data/foods";
import { itemPath } from "@/lib/guide";

export default function FoodPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Food"
        title="Bowls, tea, markets"
        description="A small starter shelf for Myanmar tastes. More full food notes can be added as the guide grows."
      />
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {foods.map((food) => (
          <GuideCard key={food.slug} item={food} href={itemPath("/food", food)} />
        ))}
      </div>
      <EmptyShelf label="Coming shelf" text="More food cards are coming soon: salads, noodle shops, tea-shop snacks, sweets, and regional flavors." />
    </section>
  );
}
