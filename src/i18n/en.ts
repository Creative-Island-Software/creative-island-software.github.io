import type { Dictionary } from "./types"

export const en: Dictionary = {
  meta: {
    title: "Creative Island Software · Simple apps, no accounts",
    description:
      "Creative Island Software: simple, beautiful mobile apps with no accounts. Kaizen, Toki, Danjiki and Bolsillo Claro, developed by Bastián Berríos in Chile.",
  },
  nav: { label: "Main", about: "About", projects: "Projects", contact: "Contact" },
  hero: {
    eyebrow: "Independent development · Chile",
    titleLine1: "Simple apps,",
    titleLine2: "beautiful and account-free.",
    lead: "At Creative Island Software I make apps for Android and Windows that you just open and use: no sign-up, with your data stored on your device.",
    ctaProjects: "See my apps",
    ctaContact: "Contact",
    iconsLabel: "My apps",
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm Bastián Berríos, a computer science engineer (Ingeniero Civil Informático) from Chile with over 5 years of experience in software and video game development. Creative Island Software is my independent studio: a small island where I make simple, beautiful apps that respect your privacy.",
      "I've been part of the full product cycle: requirements, design, programming, testing and maintenance. My apps use React, TypeScript and Tauri, don't ask for accounts and keep your data only on your device.",
    ],
    values: [
      { title: "No accounts", text: "Open the app and use it. No sign-ups, no passwords." },
      { title: "Data on your device", text: "Everything is stored locally; there are no servers of our own." },
      { title: "Made with care", text: "Carefully designed, clear interfaces without distractions." },
    ],
  },
  projects: {
    title: "Projects",
    intro: "Four apps built with React, TypeScript and Tauri, with a native layer on Android.",
    published: "Published",
    development: "In development",
    play: "Get it on Google Play",
    zoom: "Enlarge: {alt}",
    close: "Close",
    chipsLabel: "Platforms and technology",
    shotAlt: "{app}: screenshot {n}",
  },
  contact: {
    title: "Contact",
    introGithub: "Find more of my work on GitHub.",
    introEmail: "Questions, ideas or feedback about an app? Write to me.",
    github: "GitHub · bbastiann",
  },
  footer: { country: "Chile", privacy: "Privacy policy" },
  apps: {
    kaizen: {
      tagline: "Get a little better every day",
      description:
        "A minimalist, cozy habit tracker. Check off your daily list, build streaks and see your progress by week, month and year. Includes habits to quit, colored categories and home-screen widgets.",
    },
    toki: {
      tagline: "A calm Pomodoro for studying",
      description:
        "A focus timer with a cozy feel. Pomodoro, countdown and stopwatch, with digital, ring or analog clocks, light and dark themes, and stats for your focus sessions.",
    },
    danjiki: {
      tagline: "Your intermittent fasting log",
      description:
        "Log your fast with a timer and plans like 16-8 or 18-6. Discover the 11 stages your body goes through while you fast, log your weight and follow your progress. With a widget and alerts when you reach a new stage. Available in 8 languages.",
    },
    "bolsillo-claro": {
      tagline: "Your credit limit and small expenses, made clear",
      description:
        "Keep track of your credit card limits and your everyday small expenses. See how much you have left, closing and payment dates, a monthly goal with alerts, and a summary by category and period.",
      note: "The app is available in Spanish only.",
    },
  },
}
