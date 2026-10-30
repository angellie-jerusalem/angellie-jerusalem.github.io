import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link className="proj" to={`/projects/${project.slug}`}>
      <p className="eyebrow">{project.cardCategory}</p>
      <h4>{project.name}</h4>
      <span className="desc">{project.cardDescription}</span>
    </Link>
  );
}
