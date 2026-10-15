import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 {profile.name}. Built with React ⚛️</p>
    </footer>
  );
}