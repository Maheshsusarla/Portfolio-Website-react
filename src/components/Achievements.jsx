import Section from "./Section";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Achievements &" highlight="Extras">
      <div className="grid three">
        {achievements.map((a) => (
          <div className="glass ach" key={a.title}>
            <div className="project-icon">{a.icon}</div>
            <h4>{a.title}</h4>
            <p>{a.text}</p>
            <small>{a.by}</small>
          </div>
        ))}
      </div>
    </Section>
  );
}