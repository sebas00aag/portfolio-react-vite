import { useI18n } from "../state/i18n.jsx";

export default function Home() {
    const { t } = useI18n();

    return (
        <section id="home" className="section hero">
            <div className="hero-grid">
                {/* Card */}
                <div className="hero-card">
                    <p className="hero-kicker">{t("hero_hi")}</p>
                    <h1 className="hero-title">
                        Sebastián <span className="accent">.</span>
                    </h1>
                    <p className="hero-role">{t("hero_role")}</p>
                    <p className="hero-sub">{t("hero_sub")}</p>

                    <a
                        className="btn"
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        {t("hero_cta")}
                    </a>
                </div>

                {/* Logo */}
                <div className="hero-brand" aria-hidden="true">
                    <div className="hero-brandGlow" />
                    <img className="hero-brandLogo" src="/branding/logoSAAG.png" alt="" />
                </div>
            </div>
        </section>
    );
}
