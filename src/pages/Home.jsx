import ContactLinks from '../components/ContactLinks';
import profilePhoto from '../assets/profile-photo.png';
import instituteLogo from '../assets/institute-logo.jpg';
import { site } from '../data/site';

export default function Home() {
  return (
    <section className="page page-home">
      <main className="panel card">
        <div className="photo-wrap">
          <img src={profilePhoto} alt={site.name} />
        </div>

        <div className="head">
          <div className="institute">
            <img src={instituteLogo} alt="BSCS logo" />
            <p>
              {site.institute.name}
              <span>{site.institute.school}</span>
            </p>
          </div>
          <span className="badge">{site.badge}</span>
        </div>

        <div className="profile">
          <p className="eyebrow year">{site.year}</p>
          <h1 className="name">{site.name}</h1>
          <p className="tagline">{site.tagline}</p>
        </div>

        <div className="divider" />

        <p className="eyebrow connect">Let's Connect</p>
        <ContactLinks />
      </main>
    </section>
  );
}
