import { useState } from "react";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <a href="#hero" className="logo">MS<span>.</span></a>

      <ul className={open ? "open" : ""}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
    </header>
  );
}