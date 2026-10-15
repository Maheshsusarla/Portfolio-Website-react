import { useState } from "react";
import Section from "./Section";
import { projects } from "../data";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section id="projects" eyebrow="My Work" title="Featured" highlight="Projects">
      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            className={`chip ${active === c ? "active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid three">
        {list.map((p) => (
          <article className="glass project" key={p.title}>
            <div className="project-icon">{p.icon}</div>
            <small>{p.category} · {p.date}</small>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tech.map((t) => <span key={t}>{t}</span>)}
            </div>
            <div className="row">
              <a className="btn small" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
              <a className="btn small ghost" href={p.code} target="_blank" rel="noreferrer">Code</a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}