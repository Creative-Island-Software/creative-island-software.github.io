import type { Dictionary, Lang } from "./types"
import { es } from "./es"
import { en } from "./en"
import { pt } from "./pt"
import { fr } from "./fr"
import { de } from "./de"
import { it } from "./it"
import { ja } from "./ja"
import { ko } from "./ko"

export type { Dictionary, Lang, AppSlug } from "./types"

export interface LanguageInfo {
  code: Lang
  /** Nombre propio del idioma, como se muestra en el selector. */
  name: string
  /** Parámetro `hl` de Google Play, para abrir la ficha en ese idioma. */
  hl: string
}

// Los mismos 8 idiomas que Kaizen.
export const LANGUAGES: LanguageInfo[] = [
  { code: "es", name: "Español", hl: "es-419" },
  { code: "en", name: "English", hl: "en-US" },
  { code: "pt", name: "Português (Brasil)", hl: "pt-BR" },
  { code: "fr", name: "Français", hl: "fr" },
  { code: "de", name: "Deutsch", hl: "de" },
  { code: "it", name: "Italiano", hl: "it" },
  { code: "ja", name: "日本語", hl: "ja" },
  { code: "ko", name: "한국어", hl: "ko" },
]

export const dictionaries: Record<Lang, Dictionary> = { es, en, pt, fr, de, it, ja, ko }

/** Idioma por defecto cuando el del navegador no está disponible. */
export const FALLBACK_LANG: Lang = "en"

const isLang = (value: string): value is Lang => value in dictionaries

/** Primer idioma de `navigator.languages` que el sitio soporta; si no hay, el de respaldo. */
export function detectLanguage(): Lang {
  const preferred = typeof navigator === "undefined" ? [] : (navigator.languages ?? [navigator.language])
  for (const tag of preferred) {
    const primary = tag.toLowerCase().split("-")[0]
    if (isLang(primary)) return primary
  }
  return FALLBACK_LANG
}

export const isSupportedLang = isLang

/** Página de política de privacidad en el idioma elegido (español = privacy.html). */
export const privacyHref = (lang: Lang) => (lang === "es" ? "/privacy.html" : `/privacy-${lang}.html`)

/** Reemplaza {nombre} por su valor en una plantilla. */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => String(values[key] ?? match))
}
