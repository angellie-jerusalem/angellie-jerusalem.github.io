/** Shared page wrapper: fade-in section + width-constrained content. */
export default function Page({ variant = '', contentClass = '', children }) {
  return (
    <section className={`page ${variant}`.trim()}>
      <div className={`page-content ${contentClass}`.trim()}>{children}</div>
    </section>
  );
}
