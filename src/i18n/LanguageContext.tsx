import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"
import { LANGUAGES, detectLanguage, dictionaries, isSupportedLang } from "./index"
import type { Dictionary, Lang, LanguageInfo } from "./index"

const STORAGE_KEY = "cis-lang"

interface LanguageValue {
  lang: Lang
  info: LanguageInfo
  t: Dictionary
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageValue | null>(null)

function initialLanguage(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && isSupportedLang(stored)) return stored
  } catch {
    // Sin acceso a localStorage (modo privado, etc.): se usa el idioma del navegador.
  }
  return detectLanguage()
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLanguage)

  const value = useMemo<LanguageValue>(() => {
    const info = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[1]
    const setLang = (next: Lang) => {
      setLangState(next)
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // La elección solo dura mientras la página esté abierta.
      }
    }
    return { lang, info, t: dictionaries[lang], setLang }
  }, [lang])

  // Mantiene <html lang>, el título y la descripción de la pestaña en el idioma elegido.
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = value.t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute("content", value.t.meta.description)
  }, [lang, value])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage debe usarse dentro de LanguageProvider")
  return ctx
}
