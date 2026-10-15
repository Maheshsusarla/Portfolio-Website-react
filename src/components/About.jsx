import Section from "./Section";
import { about } from "../data";

export default function About() {
  return (
    <Section id="about" eyebrow="Who I Am" title="Turning ideas into" highlight="elegant code">
      <div className="glass about-card">
        <p>{about.text}</p>

        <div className="stats">
          {about.stats.map((s) => (
            <div key={s.label}>
              <strong className="grad-text">{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <ul className="details">
          {about.details.map(([k, v]) => (
            <li key={k}><b>{k}</b><span>{v}</span></li>
          ))}
        </ul>
      </div>
    </Section>
  );
}