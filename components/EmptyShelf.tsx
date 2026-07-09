type EmptyShelfProps = {
  label: string;
  text: string;
};

export function EmptyShelf({ label, text }: EmptyShelfProps) {
  return (
    <aside className="mt-8 overflow-hidden rounded-lg border border-dashed border-gold/40 bg-[#fbf5e9]/90 shadow-sm">
      <div className="grid gap-5 p-6 sm:grid-cols-[minmax(0,1fr)_11rem] sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">{label}</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/68">{text}</p>
        </div>
        <div className="hidden h-28 rounded-md border border-tamarind/10 bg-[linear-gradient(135deg,rgba(189,143,56,0.18),rgba(36,88,70,0.12)),linear-gradient(0deg,rgba(251,245,233,0.88),rgba(251,245,233,0.88))] sm:block" />
      </div>
    </aside>
  );
}
