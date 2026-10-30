import Page from '../components/Page';
import PageHeading from '../components/PageHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Page>
      <PageHeading label="Projects" title="Things I've built" />
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Page>
  );
}
