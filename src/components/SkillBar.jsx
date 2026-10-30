export default function SkillBar({ name, level }) {
  return (
    <>
      <div className="skill-row">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div
        className="bar"
        role="progressbar"
        aria-label={name}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={level}
      >
        <span style={{ width: `${level}%` }} />
      </div>
    </>
  );
}
