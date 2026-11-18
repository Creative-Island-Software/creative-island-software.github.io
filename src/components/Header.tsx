import { SITE } from "../config"
import { LANGUAGES, isSupportedLang } from "../i18n"
import { useLanguage } from "../i18n/LanguageContext"

export function Header() {
  const { lang, setLang, t } = useLanguage()

  const links = [
    { href: "#acerca", label: t.nav.about },
    { href: "#proyectos", label: t.nav.projects },
    ...(SITE.showContact ? [{ href: "#contacto", label: t.nav.contact }] : []),
  ]

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#inicio">
          <span>{SITE.brand}</span>
        </a>
        <div className="header__right">
          <nav aria-label={t.nav.label}>
            <ul className="nav">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <select
            className="lang"
            value={lang}
            onChange={(e) => isSupportedLang(e.target.value) && setLang(e.target.value)}
            aria-label="Language / Idioma"
          >
            {LANGUAGES.map((l) => (
              <option key={l.code} value={l.code}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  )
}
