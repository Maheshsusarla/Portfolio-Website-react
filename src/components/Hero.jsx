import useTyping from "../hooks/useTyping";
import { profile } from "../data";

export default function Hero() {
  const role = useTyping(profile.roles);

  return (
    <section id="hero" className="hero">
      <div className="avatar-wrap">
        <img src={profile.photo} alt={profile.name} />
      </div>

      <span className="badge">● Open to Opportunities · Fresher 2026</span>
      <h1>
        Hi, I'm <span className="grad-text">{profile.name}</span>
      </h1>
      <h2 className="typing">
        {role}
        <span className="cursor">|</span>
      </h2>
      <p className="lead">{profile.intro}</p>

      <div className="row center">
        <a href="#projects" className="btn">View My Work</a>
        <a href={profile.resume} target="_blank" rel="noreferrer" className="btn ghost">Resume ↗</a>
      </div>

      <div className="socials">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </section>
  );
}