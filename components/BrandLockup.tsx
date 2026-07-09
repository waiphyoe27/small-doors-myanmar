import Link from "next/link";

type BrandLockupProps = {
  variant?: "header" | "hero" | "footer";
};

export function BrandLockup({ variant = "header" }: BrandLockupProps) {
  if (variant === "hero") {
    return (
      <div className="text-paper">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f4cf80]">by Dalae</p>
        <h1 aria-label="Small Doors to Myanmar" className="mt-4 font-serif text-6xl leading-[0.92] text-paper drop-shadow-sm sm:text-7xl lg:text-8xl">
          <span className="block">Small Doors</span>
          <span className="block text-5xl text-[#f8dfac] sm:text-6xl lg:text-7xl">to Myanmar</span>
        </h1>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className="font-serif leading-none text-tamarind">
        <span className="block text-2xl">Small Doors</span>
        <span className="block text-lg text-jade">to Myanmar</span>
        <span className="mt-2 block font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-terracotta">by Dalae</span>
      </div>
    );
  }

  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/12 font-serif text-xl text-tamarind shadow-sm">
        SD
      </span>
      <span className="font-serif leading-none text-tamarind">
        <span className="block text-2xl transition group-hover:text-terracotta">Small Doors</span>
        <span className="block text-base text-jade">to Myanmar</span>
        <span className="mt-1 block font-sans text-[9px] font-semibold uppercase tracking-[0.22em] text-terracotta">by Dalae</span>
      </span>
    </Link>
  );
}
