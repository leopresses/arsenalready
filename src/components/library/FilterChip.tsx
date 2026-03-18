interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
        active
          ? 'bg-foreground text-background'
          : 'bg-card border border-border text-muted-foreground hover:bg-secondary'
      }`}
    >
      {label}
    </button>
  );
}
