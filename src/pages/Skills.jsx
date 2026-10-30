import Page from '../components/Page';
import PageHeading from '../components/PageHeading';
import SkillBar from '../components/SkillBar';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <Page>
      <PageHeading label="Skills" title="What I'm working with" />
      <div className="skills panel">
        {skillGroups.map((group) => (
          <section key={group.title}>
            <h3>{group.title}</h3>
            {group.skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </section>
        ))}
      </div>
    </Page>
  );
}
