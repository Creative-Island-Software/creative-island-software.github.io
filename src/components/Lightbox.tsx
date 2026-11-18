import { useEffect } from "react"
import { useLanguage } from "../i18n/LanguageContext"

export interface Screenshot {
  src: string
  alt: string
}

interface Props {
  shot: Screenshot
  onClose: () => void
}

export function Lightbox({ shot, onClose }: Props) {
  const { t } = useLanguage()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.alt} onClick={onClose}>
      <img src={shot.src} alt={shot.alt} />
      <button type="button" className="lightbox__close" onClick={onClose} aria-label={t.projects.close}>
        ×
      </button>
    </div>
  )
}
