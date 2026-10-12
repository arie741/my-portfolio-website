export default function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  );
}
