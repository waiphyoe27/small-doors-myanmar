import Link from "next/link";
import Image from "next/image";
import { GuideCard } from "@/components/GuideCard";
import { BrandLockup } from "@/components/BrandLockup";
import { SectionHeading } from "@/components/SectionHeading";
import { cultureNotes } from "@/data/cultureNotes";
import { crafts } from "@/data/crafts";
import { foods } from "@/data/foods";
import { moods } from "@/data/moods";
import { places } from "@/data/places";
import { guideHref } from "@/lib/guide";
import type { GuideSection } from "@/lib/guide";

const sections: GuideSection[] = [
  {
    href: "/places",
    title: "Places",
    eyebrow: "City, plain, lake",
    description: "Start with gentle introductions to Yangon, Bagan, and Inle Lake.",
  },
  {
    href: "/culture",
    title: "Culture Notes",
    eyebrow: "Local ways",
    description: "Small practices and context for moving with respect and attention.",
  },
  {
    href: "/food",
    title: "Food",
    eyebrow: "Bowls and tea",
    description: "A growing shelf for flavors, market breakfasts, and shared tables.",
  },
  {
    href: "/crafts",
    title: "Crafts",
    eyebrow: "Made by hand",
    description: "Objects, workshops, and the patient beauty of local materials.",
  },
  {
    href: "/moods",
    title: "Travel Moods",
    eyebrow: "Ways to wander",
    description: "Soft routes for river days, temple mornings, craft afternoons, and more.",
  },
];

const featured = [
  { item: places[0], href: "/places/yangon" },
  { item: places[1], href: "/places/bagan" },
  { item: cultureNotes[0], href: "/culture/pagoda-etiquette" },
];

const pathways = [
  {
    href: "/places/yangon",
    title: "First time in Myanmar?",
    label: "Start here",
    description: "Begin with Yangon for tea shops, pagoda light, food walks, and layered city context.",
  },
  {
    href: "/places/bagan",
    title: "A quiet 3-day route",
    label: "Slow route",
    description: "Pair Yangon with Bagan for temple mornings, lacquerware, river light, and gentle pacing.",
  },
  {
    href: "/food",
    title: "Food and tea shop starts",
    label: "Taste",
    description: "Use breakfast, tea, and small plates as a friendly doorway into daily life.",
  },
  {
    href: "/crafts",
    title: "Crafts worth seeking out",
    label: "Hands",
    description: "Find patient objects: lacquer, textiles, weaving, and the workshops behind them.",
  },
  {
    href: "/culture/pagoda-etiquette",
    title: "Before visiting pagodas",
    label: "Care",
    description: "A short cultural note for arriving with respect, ease, and awareness.",
  },
  {
    href: "/moods",
    title: "Slow travel moods",
    label: "Feeling",
    description: "Choose a day by light, water, craft, shade, markets, or quiet morning rituals.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[620px] overflow-hidden border-b border-tamarind/10">
        <Image
          src="/images/myanmar-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2c211b]/38" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211711]/88 via-[#2c211b]/66 to-[#2c211b]/18" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-paper to-transparent" />
        <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-3xl rounded-xl border border-paper/16 bg-[#211711]/34 p-6 text-paper shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-[2px] sm:p-8">
            <BrandLockup variant="hero" />
            <p className="mt-7 max-w-2xl text-xl leading-9 text-paper/92">
              A warm digital guide to Myanmar places, culture, food, crafts, and local ways of seeing.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Ways to begin"
          title="Start with a door"
          description="Choose by mood, question, or first step. The guide is meant to be browsed softly, like opening a few pages before deciding where to linger."
        />
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((pathway) => (
            <Link
              key={pathway.title}
              href={pathway.href}
              className="group rounded-lg border border-tamarind/12 bg-[#fbf5e9] p-6 shadow-[0_12px_34px_rgba(64,43,27,0.06)] transition hover:-translate-y-1 hover:border-terracotta/30 hover:bg-[#fff9ef]"
            >
              <span className="rounded-full bg-jade/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-jade">
                {pathway.label}
              </span>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-tamarind group-hover:text-terracotta">{pathway.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/70">{pathway.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 lg:px-8">
        <SectionHeading
          eyebrow="Begin here"
          title="Choose a small door"
          description="Each section is an editorial shelf: places to understand, practices to notice, tastes to remember, and moods for slower travel."
        />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {sections.map((section) => (
            <Link key={section.href} href={section.href} className="group rounded-lg border border-tamarind/12 bg-[#fbf5e9] p-6 shadow-[0_12px_34px_rgba(64,43,27,0.07)] transition hover:-translate-y-1 hover:border-terracotta/30 hover:bg-[#fff9ef] hover:shadow-soft">
              <div className="mb-5 h-16 rounded-md border border-tamarind/10 bg-[linear-gradient(135deg,rgba(189,143,56,0.16),rgba(36,88,70,0.1))]" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">{section.eyebrow}</p>
              <h2 className="mt-3 font-serif text-2xl text-tamarind group-hover:text-terracotta">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/68">{section.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#efe0c7]">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <SectionHeading eyebrow="Featured guides" title="First pages to open" />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {featured.map(({ item, href }) => (
              <GuideCard key={item.slug} item={item} href={href} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-14 md:grid-cols-3 lg:px-8">
        {[foods[0], crafts[0], moods[0]].map((item) => (
          <GuideCard key={item.slug} item={item} href={guideHref(item)} />
        ))}
      </section>

      <section className="bg-[#efe0c7]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 md:grid-cols-[16rem_minmax(0,1fr)] md:items-center lg:px-8">
          <h2 className="font-serif text-4xl text-tamarind">Travel with care</h2>
          <p className="text-lg leading-8 text-ink/72">
            This guide is for travelers who want to experience Myanmar with context, patience, and respect for local people, places, and traditions.
          </p>
        </div>
      </section>
    </>
  );
}
