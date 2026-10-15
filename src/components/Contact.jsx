import { useState } from "react";
import Section from "./Section";
import { profile } from "../data";


const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

const empty = { first: "", last: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.first.trim()) e.first = "Please enter your first name.";
    if (!form.last.trim()) e.last = "Please enter your last name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.subject.trim()) e.subject = "Please enter a subject.";
    if (!form.message.trim()) e.message = "Please enter your message.";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: `${form.first} ${form.last}`,
          email: form.email,
          _subject: form.subject, 
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm(empty);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error"); // internet problem etc.
    }
  };

  const field = (name, label, { type = "text", area = false, full = false } = {}) => (
    <label className={full ? "full" : ""}>
      {label}
      {area ? (
        <textarea name={name} rows="5" value={form[name]} onChange={handleChange} />
      ) : (
        <input name={name} type={type} value={form[name]} onChange={handleChange} />
      )}
      {errors[name] && <em>{errors[name]}</em>}
    </label>
  );

  return (
    <Section id="contact" eyebrow="Get In Touch" title="Let's build something" highlight="great together">
      <div className="contact-grid">
        <div className="glass contact-info">
          <p>I'm looking for internships and entry-level developer roles. If you have a project or opportunity, my inbox is always open!</p>
          <ul className="details">
            <li><b>Email</b><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><b>Phone</b><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
            <li><b>Location</b><span>{profile.location}</span></li>
          </ul>
        </div>

        <form className="glass form" onSubmit={handleSubmit} noValidate>
          {field("first", "First Name")}
          {field("last", "Last Name")}
          {field("email", "Email Address", { type: "email", full: true })}
          {field("subject", "Subject", { full: true })}
          {field("message", "Message", { area: true, full: true })}

          <button className="btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="success">Message sent! Mahesh will get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="fail">Something went wrong. Please try again or email me directly.</p>
          )}
        </form>
      </div>
    </Section>
  );
}