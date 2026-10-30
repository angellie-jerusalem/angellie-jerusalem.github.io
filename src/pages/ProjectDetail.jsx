import { Link, useParams } from 'react-router-dom';
import Page from '../components/Page';
import DetailSection from '../components/DetailSection';
import TechTags from '../components/TechTags';
import { getProject } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <Page contentClass="project-single-wrap">
        <div className="project-hero panel">
          <h1 className="project-title">Project not found</h1>
          <p className="project-tagline">That project doesn't exist. Head back to the full list.</p>
        </div>
        <div className="project-cta">
          <Link className="cta-button" to="/projects">View all projects</Link>
        </div>
      </Page>
    );
  }

  return (
    <Page contentClass="project-single-wrap">
      <div className="project-hero panel">
        <p className="eyebrow">{project.heroLabel}</p>
        <h1 className="project-title">{project.name}</h1>
        <p className="project-tagline">{project.tagline}</p>
      </div>

      <div className="project-details">
        <DetailSection title="Overview">
          <p>{project.overview}</p>
        </DetailSection>

        <DetailSection title="Tech Stack">
          <TechTags tags={project.tech} />
        </DetailSection>

        <DetailSection title="Key Features">
          <ul className="features-list">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </DetailSection>

        <div className="project-cta">
          {project.links.map((l) => (
            <a key={l.href} className="cta-button" href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </Page>
  );
}
