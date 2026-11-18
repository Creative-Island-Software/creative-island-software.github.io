import { useState } from "react"
import { SITE } from "./config"
import { projects } from "./data/projects"
import { Header } from "./components/Header"
import { ProjectCard } from "./components/ProjectCard"
import { Lightbox } from "./components/Lightbox"
import type { Screenshot } from "./components/Lightbox"
import { privacyHref } from "./i18n"
import { useLanguage } from "./i18n/LanguageContext"

export default function App() {
  const [zoomed, setZoomed] = useState<Screenshot | null>(null)
  const { t, lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio">
          <div className="container hero__inner">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>
              {t.hero.titleLine1}
              <br />
              <span className="grad">{t.hero.titleLine2}</span>
            </h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#proyectos">
                {t.hero.ctaProjects}
              </a>
              {SITE.showContact && (
                <a className="btn btn--ghost" href="#contacto">
                  {t.hero.ctaContact}
                </a>
              )}
            </div>
            <ul className="hero__icons" aria-label={t.hero.iconsLabel}>
              {projects.map((p) => (
                <li key={p.slug}>
                  <a href={`#${p.slug}`} title={p.name}>
                    <img src={p.icon} alt={p.name} width={56} height={56} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="acerca">
          <div className="container about">
            <div>
              <h2>{t.about.title}</h2>
              {t.about.paragraphs.map((text) => (
                <p key={text} className="about__text">
                  {text}
                </p>
              ))}
            </div>
            <ul className="values">
              {t.about.values.map((v) => (
                <li key={v.title} className="values__item">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt" id="proyectos">
          <div className="container">
            <h2>{t.projects.title}</h2>
            <p className="section__intro">{t.projects.intro}</p>
            <div className="cards">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} onZoom={setZoomed} />
              ))}
            </div>
          </div>
        </section>

        {SITE.showContact && (
          <section className="section" id="contacto">
            <div className="container contact">
              <h2>{t.contact.title}</h2>
              <p className="section__intro">{SITE.contactEmail ? t.contact.introEmail : t.contact.introGithub}</p>
              <div className="contact__links">
                {SITE.contactEmail && (
                  <a className="btn btn--primary" href={`mailto:${SITE.contactEmail}`}>
                    {SITE.contactEmail}
                  </a>
                )}
                <a
                  className={`btn ${SITE.contactEmail ? "btn--ghost" : "btn--primary"}`}
                  href={SITE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.contact.github}
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p>
            © {year} {SITE.brand} · {SITE.developer}, {t.footer.country}
          </p>
          <a href={privacyHref(lang)}>{t.footer.privacy}</a>
        </div>
      </footer>

      {zoomed && <Lightbox shot={zoomed} onClose={() => setZoomed(null)} />}
    </>
  )
}
