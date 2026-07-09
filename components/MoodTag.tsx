type MoodTagProps = {
  children: React.ReactNode;
};

export function MoodTag({ children }: MoodTagProps) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-teak">
      {children}
    </span>
  );
}
