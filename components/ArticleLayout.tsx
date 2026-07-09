import Link from "next/link";
import Image from "next/image";
import { guideChips, guideHref, guideImage, relatedGuides } from "@/lib/guide";
import type { GuideItem } from "@/lib/guide";
import { GuideCard } from "@/components/GuideCard";
import { MoodTag } from "@/components/MoodTag";

type ArticleLayoutProps = {
  item: GuideItem;
  backHref: string;
  backLabel: string;
  allItems: GuideItem[];
};

type ArticleSectionKey =
  | "dontMiss"
  | "taste"
  | "localNote"
  | "softItinerary"
  | "bringHome";

const articleSections: Array<{ label: string; key: ArticleSectionKey }> = [
  { label: "Don't miss", key: "dontMiss" },
  { label: "Taste", key: "taste" },
  { label: "Local note", key: "localNote" },
  { label: "Soft itinerary", key: "softItinerary" },
  { label: "Bring home", key: "bringHome" },
];

export function ArticleLayout({ item, backHref, backLabel, allItems }: ArticleLayoutProps) {
  const chips = guideChips(item, 5);
  const related = relatedGuides(item, allItems, 3);
  const image = guideImage(item);

  return (
    <article className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
      <Link href={backHref} className="inline-flex rounded-full bg-terracotta/10 px-4 py-2 text-sm font-semibold text-terracotta transition hover:bg-terracotta/20 hover:text-tamarind">
        {backLabel}
      </Link>
      <header className="mt-8 overflow-hidden rounded-xl border border-tamarind/12 bg-[#fbf5e9] shadow-[0_18px_55px_rgba(64,43,27,0.09)]">
        <div className="relative min-h-[18rem] overflow-hidden bg-[linear-gradient(135deg,rgba(184,95,61,0.2),rgba(36,88,70,0.18)),linear-gradient(0deg,rgba(247,239,225,0.78),rgba(247,239,225,0.78))] sm:min-h-[24rem]">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2c211b]/8 to-[#2c211b]/38" aria-hidden="true" />
        </div>
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_19rem]">
          <div className="p-7 sm:p-9">
            <MoodTag>{item.category}</MoodTag>
            {chips.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-tamarind/10 bg-paper/80 px-3 py-1 text-xs font-medium text-ink/68">
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}
            <h1 className="mt-5 font-serif text-5xl leading-tight text-tamarind sm:text-6xl">{item.title}</h1>
            <p className="mt-6 text-xl leading-9 text-ink/76">{item.summary}</p>
          </div>
          <aside className="border-t border-tamarind/10 bg-paper/72 p-7 lg:border-l lg:border-t-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Practical details</p>
            <dl className="mt-5 grid gap-4 text-sm">
              <div>
                <dt className="font-semibold text-tamarind">Best for</dt>
                <dd className="mt-1 leading-6 text-ink/70">{item.bestFor}</dd>
              </div>
              <div>
                <dt className="font-semibold text-tamarind">Ideal time</dt>
                <dd className="mt-1 leading-6 text-ink/70">{item.idealTime ?? "Flexible"}</dd>
              </div>
              <div>
                <dt className="font-semibold text-tamarind">Visit length</dt>
                <dd className="mt-1 leading-6 text-ink/70">{item.estimatedVisitLength ?? "Go slowly"}</dd>
              </div>
              <div>
                <dt className="font-semibold text-tamarind">First trip</dt>
                <dd className="mt-1 leading-6 text-ink/70">{item.isGoodForFirstTrip ? "Yes, a good starting point" : "Best with a little context"}</dd>
              </div>
            </dl>
          </aside>
        </div>
        <p className="border-t border-gold/25 bg-gold/10 px-7 py-5 font-serif text-2xl leading-9 text-jade sm:px-9">
          {item.oneLineFeeling}
        </p>
      </header>

      <section className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">Why go</p>
          <p className="mt-4 font-serif text-3xl leading-10 text-tamarind">{item.oneLineFeeling}</p>
          <p className="mt-5 text-lg leading-8 text-ink/74">{item.whyGo ?? "Use this guide as a small doorway: enough context to arrive with curiosity, and enough practical detail to shape a gentle visit without turning the place into a checklist."}</p>
        </div>
        <aside className="rounded-lg border border-gold/25 bg-gold/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Travel note</p>
          <p className="mt-3 text-sm leading-7 text-ink/70">
            Move slowly, ask before photographing people, and let local rhythms matter as much as the landmark.
          </p>
        </aside>
      </section>

      <div className="mt-12 grid gap-x-10 gap-y-9 md:grid-cols-2">
        {articleSections.map((section) => (
          <section key={section.key} className="border-t border-tamarind/12 pt-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta">{section.label}</h2>
            <p className="mt-3 text-lg leading-8 text-ink/76">{item[section.key]}</p>
          </section>
        ))}
      </div>

      <section className="mt-12 rounded-xl border border-jade/20 bg-jade/10 p-7 sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">Story corner</p>
        <blockquote className="mt-4 font-serif text-3xl leading-10 text-jade">{item.storyCorner}</blockquote>
      </section>

      {related.length ? (
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">Open another door</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((guide) => (
              <GuideCard key={`${guide.category}-${guide.slug}`} item={guide} href={guideHref(guide)} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
