import { useMemo, useState } from "react";
import { useI18n } from "../state/i18n.jsx";

export default function Contact() {
    const { t } = useI18n();

    const email = "sebas00aag@correo.com";
    const phone = "+506 8992-4871";

    const [status, setStatus] = useState("");
    const [copied, setCopied] = useState("");
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const copy = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(key);
            setTimeout(() => setCopied(""), 1200);
        } catch {
            setCopied("");
        }
    };

    const copyEmailLabel = useMemo(
        () => (copied === "email" ? t("copied") : t("copy_email")),
        [copied, t]
    );

    const copyPhoneLabel = useMemo(
        () => (copied === "phone" ? t("copied") : t("copy_phone")),
        [copied, t]
    );

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
    };

    //  mailto
    const onSubmit = (e) => {
        e.preventDefault();

        const name = form.name.trim();
        const from = form.email.trim();
        const msg = form.message.trim();

        const subject = `${t("contact_mail_subject")} — ${name}`;
        const body =
            `${t("contact_name")}: ${name}\n` +
            `${t("contact_email")}: ${from}\n\n` +
            `${t("contact_message")}:\n${msg}\n`;

        const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;

        setStatus(t("contact_success_mailto"));
        setTimeout(() => setStatus(""), 2600);

        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="section">
            <h2 className="section-title">{t("contact_title")}</h2>
            <p className="section-sub">{t("contact_sub")}</p>

            <div className="grid two">
                {/* LEFT */}
                <div className="card">
                    <div className="card-body contact-left">
                        {/*  Meta */}
                        <div className="contact-meta">
                            <div className="contact-item">
                                <span className="contact-k">{t("contact_location")}</span>
                                <span className="contact-v">{t("contact_location_value")}</span>
                            </div>

                            <div className="contact-item">
                                <span className="contact-k">{t("contact_languages")}</span>
                                <span className="contact-v">{t("contact_languages_value")}</span>
                            </div>

                            <div className="contact-item">
                                <span className="contact-k">{t("contact_response")}</span>
                                <span className="contact-v">{t("contact_response_value")}</span>
                            </div>
                        </div>

                        {/*  Bullets */}
                        <ul className="contact-bullets">
                            <li>{t("contact_bullet_1")}</li>
                            <li>{t("contact_bullet_2")}</li>
                            <li>{t("contact_bullet_3")}</li>
                        </ul>

                        {/* Quote */}
                        <p className="contact-quote">“{t("contact_quote")}”</p>

                        {/*  Buttons */}
                        <div className="btn-row">
                            <button
                                className="btn btn-ghost"
                                type="button"
                                onClick={() => scrollTo("projects")}
                            >
                                {t("contact_view_projects")}
                            </button>

                            <a className="btn" href="/cv.pdf" target="_blank" rel="noreferrer">
                                {t("contact_view_cv")}
                            </a>
                        </div>

                        <div className="contact-quick">
                            <div className="contact-line">
                                <strong>{t("contact_email_label")}:</strong> {email}
                                <button
                                    className="btn btn-ghost small"
                                    type="button"
                                    onClick={() => copy(email, "email")}
                                >
                                    {copyEmailLabel}
                                </button>
                            </div>

                            <div className="contact-line">
                                <strong>{t("contact_phone_label")}:</strong> {phone}
                                <button
                                    className="btn btn-ghost small"
                                    type="button"
                                    onClick={() => copy(phone, "phone")}
                                >
                                    {copyPhoneLabel}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <form className="card" onSubmit={onSubmit}>
                    <div className="card-body">
                        <label className="label">
                            {t("contact_name")}
                            <input
                                className="input"
                                name="name"
                                value={form.name}
                                onChange={onChange}
                                required
                            />
                        </label>

                        <label className="label">
                            {t("contact_email")}
                            <input
                                className="input"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={onChange}
                                required
                            />
                        </label>

                        <label className="label">
                            {t("contact_message")}
                            <textarea
                                className="textarea"
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={onChange}
                                required
                            />
                        </label>

                        <div className="btn-row">
                            <button className="btn" type="submit">
                                {t("contact_send")}
                            </button>
                            {status ? <span className="status">{status}</span> : null}
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
