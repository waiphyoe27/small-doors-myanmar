import Link from "next/link";
import Image from "next/image";
import { guideChips, guideImage } from "@/lib/guide";
import type { GuideItem } from "@/lib/guide";
import { MoodTag } from "@/components/MoodTag";

type GuideCardProps = {
  item: GuideItem;
  href: string;
};

export function GuideCard({ item, href }: GuideCardProps) {
  const chips = guideChips(item, 4);
  const image = guideImage(item);

  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between overflow-hidden rounded-lg border border-tamarind/12 bg-[#fbf5e9] shadow-[0_12px_32px_rgba(64,43,27,0.07)] transition duration-200 hover:-translate-y-1 hover:border-terracotta/30 hover:bg-[#fff9ef] hover:shadow-soft"
    >
      <div className="p-5 sm:p-6">
        <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-md border border-tamarind/10 bg-[linear-gradient(135deg,rgba(184,95,61,0.18),rgba(36,88,70,0.16)),linear-gradient(0deg,rgba(251,245,233,0.86),rgba(251,245,233,0.86))]">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 500px, (min-width: 768px) 50vw, calc(100vw - 2.5rem)"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2c211b]/5 to-[#2c211b]/24" aria-hidden="true" />
        </div>
        <MoodTag>{item.category}</MoodTag>
        {item.isComingSoon ? (
          <span className="ml-2 inline-flex rounded-full bg-jade/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-jade">
            Guide in progress
          </span>
        ) : null}
        <h2 className="mt-5 font-serif text-3xl leading-tight text-tamarind group-hover:text-terracotta">{item.title}</h2>
        <p className="mt-3 text-base leading-7 text-ink/70">{item.summary}</p>
        {chips.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span key={chip} className="rounded-full border border-tamarind/10 bg-paper/70 px-3 py-1 text-xs font-medium text-ink/68">
                {chip}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <p className="mx-5 mb-5 rounded-md border border-gold/20 bg-gold/10 px-4 py-3 font-serif text-lg leading-7 text-jade sm:mx-6 sm:mb-6">
        {item.oneLineFeeling}
      </p>
    </Link>
  );
}
