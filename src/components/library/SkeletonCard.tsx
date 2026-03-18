export function SkeletonCard() {
  return (
    <div className="bg-card border border-border rounded-xl p-5 animate-pulse">
      <div className="flex justify-between mb-4">
        <div className="h-5 w-16 bg-secondary rounded-md" />
        <div className="h-5 w-5 bg-secondary rounded" />
      </div>
      <div className="h-6 bg-secondary rounded mb-2 w-3/4" />
      <div className="h-4 bg-secondary rounded mb-1 w-full" />
      <div className="h-4 bg-secondary rounded mb-4 w-2/3" />
      <div className="flex gap-1.5 mb-4">
        <div className="h-5 w-14 bg-secondary rounded-md" />
        <div className="h-5 w-14 bg-secondary rounded-md" />
      </div>
      <div className="h-10 bg-secondary rounded-lg" />
    </div>
  );
}
