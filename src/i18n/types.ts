export type Lang = "es" | "en" | "pt" | "fr" | "de" | "it" | "ja" | "ko"

export type AppSlug = "kaizen" | "toki" | "danjiki" | "bolsillo-claro"

export interface AppText {
  tagline: string
  description: string
  /** Aviso opcional (por ejemplo, que la app solo existe en español). */
  note?: string
}

export interface Dictionary {
  meta: { title: string; description: string }
  nav: { label: string; about: string; projects: string; contact: string }
  hero: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    lead: string
    ctaProjects: string
    ctaContact: string
    iconsLabel: string
  }
  about: {
    title: string
    paragraphs: [string, string]
    values: { title: string; text: string }[]
  }
  projects: {
    title: string
    intro: string
    published: string
    development: string
    play: string
    /** Plantilla con {alt}. */
    zoom: string
    close: string
    chipsLabel: string
    /** Plantilla con {app} y {n}. */
    shotAlt: string
  }
  contact: { title: string; introGithub: string; introEmail: string; github: string }
  footer: { country: string; privacy: string }
  apps: Record<AppSlug, AppText>
}
