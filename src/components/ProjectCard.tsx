import type { CSSProperties } from "react"
import { playUrlFor, shotSrc } from "../data/projects"
import type { Project } from "../data/projects"
import { fill } from "../i18n"
import { useLanguage } from "../i18n/LanguageContext"
import type { Screenshot } from "./Lightbox"

interface Props {
  project: Project
  onZoom: (shot: Screenshot) => void
}

export function ProjectCard({ project, onZoom }: Props) {
  const { slug, name, tech, platforms, status, playUrl, accent, icon, shots } = project
  const { t, info } = useLanguage()
  const text = t.apps[slug]
  const published = status === "published"

  return (
    <article id={slug} className="card" style={{ "--accent": accent } as CSSProperties}>
      <div className="card__info">
        <div className="card__head">
          <img className="card__icon" src={icon} alt="" width={64} height={64} />
          <div>
            <h3>{name}</h3>
            <p className="card__tagline">{text.tagline}</p>
          </div>
        </div>

        <p className="card__desc">{text.description}</p>
        {text.note && <p className="card__note">{text.note}</p>}

        <div className="chips" aria-label={t.projects.chipsLabel}>
          <span className={`chip chip--status${published ? "" : " chip--dev"}`}>
            {published ? t.projects.published : t.projects.development}
          </span>
          {platforms.map((p) => (
            <span key={p} className="chip chip--platform">
              {p}
            </span>
          ))}
          {tech.map((x) => (
            <span key={x} className="chip">
              {x}
            </span>
          ))}
        </div>

        {published && playUrl && (
          <a className="btn btn--play" href={playUrlFor(playUrl, info.hl)} target="_blank" rel="noopener noreferrer">
            {t.projects.play}
          </a>
        )}
      </div>

      <ul className="shots">
        {shots.map((file, i) => {
          const alt = fill(t.projects.shotAlt, { app: name, n: i + 1 })
          const src = shotSrc(slug, file)
          return (
            <li key={file}>
              <button
                type="button"
                className="shot"
                onClick={() => onZoom({ src, alt })}
                aria-label={fill(t.projects.zoom, { alt })}
              >
                <img src={src} alt={alt} width={450} height={800} loading="lazy" />
              </button>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
