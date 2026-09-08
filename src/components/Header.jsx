import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "services", label: "What I Can Do" },
  { id: "about", label: "About" },
  { id: "awards", label: "Awards" },
  { id: "trainings", label: "Trainings" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const ids = ["hero", ...NAV_LINKS.map((l) => l.id), "resume", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  // Every nav item scrolls to its in-page section on the homepage, same as
  // before. If we're on another page (e.g. the standalone /portfolio page),
  // navigate home first and pass along which section to land on once the
  // homepage has mounted (see HomePage.jsx).
  const scrollToId = (id) => {
    setMenuOpen(false);

    if (!isHome) {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className="pill-header">
        <button
          type="button"
          className="brand"
          onClick={() => scrollToId("hero")}
          aria-label="Go to top"
        >
          <span className="brand-mark">S</span>
          <span className="brand-name">Samnang</span>
        </button>

        <ul className="pill-nav">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                className={activeSection === link.id ? "is-active" : ""}
                onClick={() => scrollToId(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="pill-header-actions">
          <ThemeToggle />
          <button
            type="button"
            className="pill-header-burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>
          <button
            type="button"
            className="btn-hire"
            onClick={() => scrollToId("contact")}
          >
            Hire Me
          </button>
        </div>
      </header>

      <nav className={`pill-mobile-menu${menuOpen ? " is-open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollToId(link.id)}
          >
            {link.label}
          </button>
        ))}
        <button type="button" onClick={() => scrollToId("contact")}>
          Contact
        </button>
      </nav>
    </>
  );
}
