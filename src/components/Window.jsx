// An editor or terminal frame: title bar with three dots and a file name.
const Window = ({ title, className = "", children }) => (
  <div className={`overflow-hidden rounded-lg border border-line bg-surface shadow-sm ${className}`}>
    <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />
      <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />
      <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />
      <span className="ml-2 font-mono text-xs text-muted">{title}</span>
    </div>
    {children}
  </div>
);

export default Window;
