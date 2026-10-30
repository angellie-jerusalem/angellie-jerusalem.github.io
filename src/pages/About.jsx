import Page from '../components/Page';
import PageHeading from '../components/PageHeading';
import { site } from '../data/site';

export default function About() {
  return (
    <Page>
      <PageHeading label="About" title="A little bit about me" />
      <p className="text">
        Hi! I'm <strong>{site.name}</strong>, a 3rd-year <strong>BSCS</strong> student at{' '}
        {site.institute.school}. {site.about}
      </p>
    </Page>
  );
}
