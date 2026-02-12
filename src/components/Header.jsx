import { useEffect, useState } from "react";
import { useI18n } from "../state/i18n.jsx";

const links = [
    { id: "home", key: "nav_home" },
    { id: "about", key: "nav_about" },
    { id: "projects", key: "nav_projects" },
    { id: "contact", key: "nav_contact" },
];

export default function Header({ activeSection }) {
    const { lang, setLang, t } = useI18n();
    const [open, setOpen] = useState(false);

    // Cierra el menú al cambiar sección
    useEffect(() => setOpen(false), [activeSection]);

    const onNav = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <>
            <header className={`header ${open ? "active" : ""}`}>
                <a
                    className="logo"
                    href="#home"
                    onClick={(e) => (e.preventDefault(), onNav("home"))}
                >

                    <span>Dev</span>Sebastián
                </a>
                <img
                    className="header-favicon-centered"
                    src="/branding/favicon.png"
                    alt="SAAG"
                    loading="lazy"
                />
                <nav className="navbar">
                    {links.map((l) => (
                        <a
                            key={l.id}
                            href={`#${l.id}`}
                            className={activeSection === l.id ? "active" : ""}
                            onClick={(e) => (e.preventDefault(), onNav(l.id))}
                        >
                            {t(l.key)}
                        </a>
                    ))}
                </nav>

                {/* footer: redes + idioma */}
                <div className="header-actions header-actions--row">
                    <a
                        className="social-btn"
                        href="https://github.com/sebas00aag"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <svg viewBox="0 0 24 24" className="social-ico">
                            <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.1 3.22 9.43 7.69 10.96.56.1.77-.25.77-.55v-2.02c-3.13.7-3.79-1.55-3.79-1.55-.51-1.33-1.24-1.68-1.24-1.68-1.01-.71.08-.7.08-.7 1.12.08 1.71 1.18 1.71 1.18.99 1.74 2.6 1.24 3.23.95.1-.74.39-1.24.7-1.53-2.5-.29-5.13-1.28-5.13-5.7 0-1.26.44-2.29 1.17-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.18.91-.26 1.89-.39 2.86-.39.97 0 1.95.13 2.86.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.57.23 2.73.11 3.02.73.81 1.17 1.84 1.17 3.1 0 4.43-2.64 5.41-5.15 5.7.4.35.76 1.04.76 2.1v3.12c0 .3.2.66.78.55 4.46-1.53 7.67-5.86 7.67-10.96C23.25 5.6 18.27.5 12 .5z"/>
                        </svg>
                    </a>

                    <a className="social-btn" href="https://linkedin.com/in/sebastián-arrieta/" target="_blank" rel="noreferrer">
                        <svg viewBox="0 0 24 24" className="social-ico">
                            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.98h-4V23.5zM8 7.98h3.83v2.12h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v9.36h-4v-8.3c0-1.98-.04-4.52-2.75-4.52-2.76 0-3.18 2.15-3.18 4.38v8.44H8V7.98z"/>
                        </svg>
                    </a>

                    <a className="social-btn" href="https://wa.me/50689924871" target="_blank" rel="noreferrer">
                        <svg viewBox="0 0 24 24" className="social-ico">
                            <path d="M20.52 3.48A11.85 11.85 0 0012.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.96L0 24l6.3-1.64a11.84 11.84 0 005.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.45z"/>
                        </svg>
                    </a>

                    <button
                        className="lang-btn"
                        type="button"
                        onClick={() => setLang(lang === "es" ? "en" : "es")}
                    >
                        {lang.toUpperCase()}
                    </button>
                </div>

            </header>

            <button
                className={`menu-bars ${open ? "active" : ""}`}
                type="button"
                aria-label="Open menu"
                onClick={() => setOpen((v) => !v)}
            >
                <span />
                <span />
                <span />
            </button>
        </>
    );
}
