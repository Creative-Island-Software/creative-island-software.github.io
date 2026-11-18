import type { Dictionary } from "./types"

export const es: Dictionary = {
  meta: {
    title: "Creative Island Software · Apps simples y sin cuentas",
    description:
      "Creative Island Software: apps móviles simples, bonitas y sin cuentas. Kaizen, Toki, Danjiki y Bolsillo Claro, desarrolladas por Bastián Berríos en Chile.",
  },
  nav: { label: "Principal", about: "Acerca de", projects: "Proyectos", contact: "Contacto" },
  hero: {
    eyebrow: "Desarrollo independiente · Chile",
    titleLine1: "Apps simples,",
    titleLine2: "bonitas y sin cuentas.",
    lead: "En Creative Island Software hago apps para Android y Windows que se abren y se usan: sin registros, con tus datos guardados en tu dispositivo.",
    ctaProjects: "Ver mis apps",
    ctaContact: "Contacto",
    iconsLabel: "Mis apps",
  },
  about: {
    title: "Acerca de",
    paragraphs: [
      "Soy Bastián Berríos, Ingeniero Civil Informático de Chile, con más de 5 años de experiencia en desarrollo de software y videojuegos. Creative Island Software es mi estudio independiente: una isla pequeña donde hago apps simples, bonitas y que respetan tu privacidad.",
      "He participado en el ciclo completo de un producto: requerimientos, diseño, programación, pruebas y mantenimiento. Mis apps usan React, TypeScript y Tauri, no piden cuentas y guardan tus datos solo en tu dispositivo.",
    ],
    values: [
      { title: "Sin cuentas", text: "Abres la app y la usas. Nada de registros ni contraseñas." },
      { title: "Datos en tu dispositivo", text: "Todo se guarda localmente; no hay servidores propios." },
      { title: "Hechas con cariño", text: "Interfaces cuidadas, claras y sin distracciones." },
    ],
  },
  projects: {
    title: "Proyectos",
    intro: "Cuatro apps hechas con React, TypeScript y Tauri, con capa nativa en Android.",
    published: "Publicada",
    development: "En desarrollo",
    play: "Ver en Google Play",
    zoom: "Ampliar: {alt}",
    close: "Cerrar",
    chipsLabel: "Plataformas y tecnología",
    shotAlt: "{app}: captura {n}",
  },
  contact: {
    title: "Contacto",
    introGithub: "Encuentra más de mi trabajo en GitHub.",
    introEmail: "¿Dudas, ideas o comentarios sobre alguna app? Escríbeme.",
    github: "GitHub · bbastiann",
  },
  footer: { country: "Chile", privacy: "Política de privacidad" },
  apps: {
    kaizen: {
      tagline: "Mejora un poco cada día",
      description:
        "Un rastreador de hábitos minimalista y acogedor. Marca tu lista diaria, construye rachas y mira tu progreso por semana, mes y año. Incluye hábitos para dejar, categorías con color y widgets en la pantalla de inicio.",
    },
    toki: {
      tagline: "Pomodoro sereno para estudiar",
      description:
        "Un temporizador de concentración con estética cozy. Pomodoro, cuenta regresiva y cronómetro, con relojes digital, de anillo o analógico, temas claro y oscuro y estadísticas de tus sesiones de enfoque.",
    },
    danjiki: {
      tagline: "Tu registro de ayuno intermitente",
      description:
        "Registra tu ayuno con un cronómetro y planes como 16-8 o 18-6. Descubre las 11 etapas del cuerpo mientras ayunas, anota tu peso y sigue tu evolución. Con widget y avisos al cambiar de etapa. Disponible en 8 idiomas.",
    },
    "bolsillo-claro": {
      tagline: "Tu cupo y tus gastos hormiga, claros",
      description:
        "Controla el cupo de tus tarjetas de crédito y tus gastos hormiga. Ve cuánto te queda, las fechas de cierre y de pago, una meta mensual con alertas y un resumen por categoría y por período.",
      note: "La app está disponible solo en español.",
    },
  },
}
