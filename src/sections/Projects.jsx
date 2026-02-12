import { useI18n } from "../state/i18n.jsx";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
    const { t } = useI18n();

    return (
        <section id="projects" className="section">
            <h2 className="section-title">{t("projects_title")}</h2>
            <p className="section-sub">{t("projects_sub")}</p>

            <div className="grid cards">
                {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} t={t} />
                ))}
            </div>
        </section>
    );
}
