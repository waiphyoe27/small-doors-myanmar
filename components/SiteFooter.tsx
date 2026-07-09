import { BrandLockup } from "@/components/BrandLockup";

export function SiteFooter() {
  return (
    <footer className="border-t border-tamarind/10 bg-[#efe0c7]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 text-sm text-ink/70 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <BrandLockup variant="footer" />
        <p className="max-w-md leading-7">A quiet editorial guide to places, culture, food, crafts, and travel moods.</p>
      </div>
    </footer>
  );
}
