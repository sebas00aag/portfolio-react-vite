export default function ProjectCard({ project, t }) {
    if (!project) return null;

    const fallback = "/projects/MuseAI.png";
    const imgSrc = project.image || fallback;

    return (
        <article className="card project-card">
            <div className="project-media">
                <img
                    src={imgSrc}
                    alt={project.alt || project.title}
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src = fallback;
                    }}
                />
                <div className="project-mediaOverlay" />
            </div>

            <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>

                <div className="chip-row">
                    {(project.tech || []).map((tech) => (
                        <span className="chip" key={tech}>{tech}</span>
                    ))}
                </div>

                <div className="btn-row project-actions">
                    <a className="btn" href={project.demoUrl} target="_blank" rel="noreferrer">
                        {t("project_btn_demo")}
                    </a>
                    <a className="btn btn-ghost" href={project.codeUrl} target="_blank" rel="noreferrer">
                        {t("project_btn_code")}
                    </a>
                </div>
            </div>
        </article>
    );
}
