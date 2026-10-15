import Section from "./Section";
import { skills, certifications } from "../data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="What I Know" title="Technical" highlight="Expertise">
      {skills.map((group) => (
        <div className="skill-group" key={group.title}>
          <h4>{group.title}</h4>
          <div className="logos">
            {group.items.map((s) => (
              <div className="glass logo-card" key={s.name}>
                <img
                  src={s.logo}
                  alt={s.name}
                  className={s.invert ? "invert" : ""}
                  loading="lazy"
                />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h3 className="sub">Certifications</h3>
      <div className="grid two">
        {certifications.map((c) => (
          <div className="glass cert" key={c.name}>
            🎓 {c.link ? <a href={c.link} target="_blank" rel="noreferrer">{c.name} ↗</a> : c.name}
          </div>
        ))}
      </div>
    </Section>
  );
}