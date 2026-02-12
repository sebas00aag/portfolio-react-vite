import { useI18n } from "../state/i18n.jsx";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="section">

        <h2 className="section-title">{t("about_title")}</h2>
        <p className="section-sub">{t("about_sub")}</p>
        <div className="grid two">
        <div className="card">
          <div className="card-body about-text">
            <p>{t("about_p1")}</p>
            <p>{t("about_p2")}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Stack</h3>
              {/* Frontend */}
              <div className="stack-group">
                  <h4 className="stack-subtitle">Frontend</h4>
                  <div className="chip-row">
                      {[
                          "React",
                          "Angular",
                          "Vite",
                          "Three.js",
                          "TypeScript",
                          "JavaScript",
                          "HTML5",
                          "CSS3",
                          "Responsive Design"
                      ].map((x) => (
                          <span key={x} className="chip">
            {x}
          </span>
                      ))}
                  </div>
              </div>

              {/* Backend */}
              <div className="stack-group">
                  <h4 className="stack-subtitle">Backend</h4>
                  <div className="chip-row">
                      {[
                          ".NET",
                          "ASP.NET Core",
                          "Node.js",
                          "Express",
                          "REST APIs",
                          "JWT Auth"
                      ].map((x) => (
                          <span key={x} className="chip">
            {x}
          </span>
                      ))}
                  </div>
              </div>

              {/* Databases */}
              <div className="stack-group">
                  <h4 className="stack-subtitle">Databases</h4>
                  <div className="chip-row">
                      {[
                          "SQL Server",
                          "PostgreSQL",
                          "MySQL"
                      ].map((x) => (
                          <span key={x} className="chip">
            {x}
          </span>
                      ))}
                  </div>
              </div>

              {/* Architecture & Workflow */}
              <div className="stack-group">
                  <h4 className="stack-subtitle">Architecture & Workflow</h4>
                  <div className="chip-row">
                      {[
                          "Clean Architecture",
                          "MVC",
                          "SOLID",
                          "SCRUM",
                          "Jira",
                          "Git",
                          "CI/CD"
                      ].map((x) => (
                          <span key={x} className="chip">
            {x}
          </span>
                      ))}
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
