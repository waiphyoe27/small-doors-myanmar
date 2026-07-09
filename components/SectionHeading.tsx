type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">{eyebrow}</p> : null}
      <h1 className="font-serif text-4xl leading-tight text-tamarind sm:text-5xl">{title}</h1>
      {description ? <p className="mt-4 text-lg leading-8 text-ink/72">{description}</p> : null}
    </div>
  );
}
