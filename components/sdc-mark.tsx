type MarkProps = { className?: string; label?: boolean };

export function SdcMark({ className = "", label = false }: MarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/sdc%20logo.png"
        alt="SDC logo"
        className="h-14 w-auto shrink-0 object-contain"
      />
      {label && <span className="font-display text-xl font-extrabold tracking-[-0.06em] text-gold">SDC</span>}
    </div>
  );
}
