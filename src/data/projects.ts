import type { AppSlug } from "../i18n"

export type ProjectStatus = "published" | "development"

export interface Project {
  slug: AppSlug
  name: string
  tech: string[]
  platforms: string[]
  status: ProjectStatus
  /** Enlace a Google Play. Mientras esté vacío no se muestra el botón. */
  playUrl: string
  /** Color de acento de la tarjeta (tomado de la paleta de cada app). */
  accent: string
  icon: string
  /** Nombres de archivo de las capturas (en /assets/<slug>/). Están en inglés, salvo Bolsillo Claro. */
  shots: string[]
}

// Los textos (eslogan, descripción, avisos) viven en src/i18n, uno por idioma.
export const projects: Project[] = [
  {
    slug: "kaizen",
    name: "Kaizen",
    tech: ["React", "TypeScript", "Tauri", "Kotlin"],
    platforms: ["Android", "Windows"],
    status: "published",
    playUrl: "https://play.google.com/store/apps/details?id=com.creativeislandsoftware.kaizen",
    accent: "#e2705a",
    icon: "/assets/kaizen/icon.webp",
    shots: ["hoy", "progreso", "hoy-oscuro"],
  },
  {
    slug: "toki",
    name: "Toki",
    tech: ["React", "TypeScript", "Tauri", "Kotlin"],
    platforms: ["Android", "Windows"],
    status: "published",
    playUrl: "https://play.google.com/store/apps/details?id=com.creativeislandsoftware.toki",
    accent: "#dc9468",
    icon: "/assets/toki/icon.webp",
    shots: ["pomodoro", "analogico", "estadisticas"],
  },
  {
    slug: "danjiki",
    name: "Danjiki",
    tech: ["React", "TypeScript", "Tauri", "Kotlin"],
    platforms: ["Android", "Windows"],
    status: "published",
    playUrl: "https://play.google.com/store/apps/details?id=com.creativeislandsoftware.danjiki",
    accent: "#2dd9a8",
    icon: "/assets/danjiki/icon.webp",
    shots: ["ayuno", "etapas", "progreso"],
  },
  {
    slug: "bolsillo-claro",
    name: "Bolsillo Claro",
    tech: ["React", "TypeScript", "Tauri", "Kotlin"],
    platforms: ["Android", "Windows"],
    status: "published",
    playUrl: "https://play.google.com/store/apps/details?id=com.creativeislandsoftware.bolsilloclaro",
    accent: "#22c55e",
    icon: "/assets/bolsillo-claro/icon.webp",
    shots: ["tarjetas", "gastos", "oscuro"],
  },
]

export const shotSrc = (slug: AppSlug, file: string) => `/assets/${slug}/${file}.webp`

/** Abre la ficha de Google Play en el idioma elegido (parámetro hl). */
export function playUrlFor(url: string, hl: string): string {
  const u = new URL(url)
  u.searchParams.set("hl", hl)
  return u.toString()
}
