export default function PageHeading({ label, title }) {
  return (
    <>
      <p className="label">{label}</p>
      <h2 className="title">{title}</h2>
    </>
  );
}
