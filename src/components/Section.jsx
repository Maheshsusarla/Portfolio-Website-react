import useReveal from "../hooks/useReveal";


export default function Section({ id, eyebrow, title, highlight, children }) {
  const [ref, shown] = useReveal();

  return (
    <section id={id} ref={ref} className={`section reveal ${shown ? "show" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="title">
        {title} <span className="grad-text">{highlight}</span>
      </h2>
      {children}
    </section>
  );
}