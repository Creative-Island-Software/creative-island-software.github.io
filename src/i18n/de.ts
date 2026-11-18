import type { Dictionary } from "./types"

export const de: Dictionary = {
  meta: {
    title: "Creative Island Software · Einfache Apps ohne Konto",
    description:
      "Creative Island Software: einfache, schöne Mobile-Apps ohne Konto. Kaizen, Toki, Danjiki und Bolsillo Claro, entwickelt von Bastián Berríos in Chile.",
  },
  nav: { label: "Hauptmenü", about: "Über mich", projects: "Projekte", contact: "Kontakt" },
  hero: {
    eyebrow: "Unabhängige Entwicklung · Chile",
    titleLine1: "Einfache Apps,",
    titleLine2: "schön und ohne Konto.",
    lead: "Bei Creative Island Software entwickle ich Apps für Android und Windows, die man einfach öffnet und nutzt: ohne Anmeldung, mit deinen Daten auf deinem Gerät.",
    ctaProjects: "Meine Apps ansehen",
    ctaContact: "Kontakt",
    iconsLabel: "Meine Apps",
  },
  about: {
    title: "Über mich",
    paragraphs: [
      "Ich bin Bastián Berríos, Informatik-Ingenieur (Ingeniero Civil Informático) aus Chile mit über 5 Jahren Erfahrung in der Software- und Spieleentwicklung. Creative Island Software ist mein unabhängiges Studio: eine kleine Insel, auf der ich einfache, schöne Apps entwickle, die deine Privatsphäre respektieren.",
      "Ich war am gesamten Produktzyklus beteiligt: Anforderungen, Design, Programmierung, Tests und Wartung. Meine Apps nutzen React, TypeScript und Tauri, verlangen kein Konto und speichern deine Daten nur auf deinem Gerät.",
    ],
    values: [
      { title: "Ohne Konto", text: "App öffnen und loslegen. Keine Registrierung, keine Passwörter." },
      { title: "Daten auf deinem Gerät", text: "Alles wird lokal gespeichert; es gibt keine eigenen Server." },
      { title: "Mit Liebe gemacht", text: "Sorgfältige, klare Oberflächen ohne Ablenkung." },
    ],
  },
  projects: {
    title: "Projekte",
    intro: "Vier Apps mit React, TypeScript und Tauri, mit nativer Schicht auf Android.",
    published: "Veröffentlicht",
    development: "In Entwicklung",
    play: "Bei Google Play ansehen",
    zoom: "Vergrößern: {alt}",
    close: "Schließen",
    chipsLabel: "Plattformen und Technologie",
    shotAlt: "{app}: Screenshot {n}",
  },
  contact: {
    title: "Kontakt",
    introGithub: "Mehr von meiner Arbeit findest du auf GitHub.",
    introEmail: "Fragen, Ideen oder Feedback zu einer App? Schreib mir.",
    github: "GitHub · bbastiann",
  },
  footer: { country: "Chile", privacy: "Datenschutzerklärung" },
  apps: {
    kaizen: {
      tagline: "Werde jeden Tag ein bisschen besser",
      description:
        "Ein minimalistischer, gemütlicher Gewohnheitstracker. Hake deine Tagesliste ab, baue Serien auf und verfolge deinen Fortschritt nach Woche, Monat und Jahr. Mit Gewohnheiten zum Abgewöhnen, farbigen Kategorien und Widgets auf dem Startbildschirm.",
    },
    toki: {
      tagline: "Ruhiges Pomodoro zum Lernen",
      description:
        "Ein Fokus-Timer mit gemütlicher Atmosphäre. Pomodoro, Countdown und Stoppuhr, mit digitaler, ringförmiger oder analoger Uhr, hellem und dunklem Design und Statistiken zu deinen Fokus-Sitzungen.",
    },
    danjiki: {
      tagline: "Dein Protokoll fürs Intervallfasten",
      description:
        "Protokolliere dein Fasten mit einem Timer und Plänen wie 16-8 oder 18-6. Entdecke die 11 Phasen des Körpers während des Fastens, trage dein Gewicht ein und verfolge deinen Verlauf. Mit Widget und Hinweisen bei jeder neuen Phase. In 8 Sprachen verfügbar.",
    },
    "bolsillo-claro": {
      tagline: "Dein Kreditrahmen und deine kleinen Ausgaben, klar",
      description:
        "Behalte den Rahmen deiner Kreditkarten und deine kleinen Alltagsausgaben im Blick. Sieh, wie viel dir bleibt, Abschluss- und Zahlungstermine, ein Monatsziel mit Warnungen und eine Übersicht nach Kategorie und Zeitraum.",
      note: "Die App ist nur auf Spanisch verfügbar.",
    },
  },
}
