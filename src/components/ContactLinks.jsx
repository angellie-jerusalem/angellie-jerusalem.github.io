import { site } from '../data/site';

export default function ContactLinks() {
  return (
    <div className="contact">
      <a href={`mailto:${site.email}`}>
        <span>Email</span> {site.email}
      </a>
      <a href={site.github.url} target="_blank" rel="noopener noreferrer">
        <span>GitHub</span> {site.github.handle}
      </a>
    </div>
  );
}
