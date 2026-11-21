// Section title with the shell command that "produced" it above it.
const SectionHeading = ({ id, command, title, children }) => (
  <div className="max-w-2xl">
    <p className="font-mono text-sm text-muted">
      <span className="text-accent">$</span> {command}
    </p>
    <h2 id={id} className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
      {title}
    </h2>
    {children && <p className="mt-3 text-muted">{children}</p>}
  </div>
);

export default SectionHeading;
