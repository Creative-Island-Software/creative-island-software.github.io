import type { Dictionary } from "./types"

export const fr: Dictionary = {
  meta: {
    title: "Creative Island Software · Des apps simples, sans compte",
    description:
      "Creative Island Software : des applications mobiles simples et belles, sans compte. Kaizen, Toki, Danjiki et Bolsillo Claro, développées par Bastián Berríos au Chili.",
  },
  nav: { label: "Principal", about: "À propos", projects: "Projets", contact: "Contact" },
  hero: {
    eyebrow: "Développement indépendant · Chili",
    titleLine1: "Des apps simples,",
    titleLine2: "belles et sans compte.",
    lead: "Chez Creative Island Software, je crée des apps pour Android et Windows qu'on ouvre et qu'on utilise : sans inscription, avec vos données stockées sur votre appareil.",
    ctaProjects: "Voir mes apps",
    ctaContact: "Contact",
    iconsLabel: "Mes apps",
  },
  about: {
    title: "À propos",
    paragraphs: [
      "Je suis Bastián Berríos, ingénieur en informatique (Ingeniero Civil Informático) chilien, avec plus de 5 ans d'expérience en développement de logiciels et de jeux vidéo. Creative Island Software est mon studio indépendant : une petite île où je crée des apps simples, belles et respectueuses de votre vie privée.",
      "J'ai participé à tout le cycle d'un produit : recueil des besoins, conception, programmation, tests et maintenance. Mes apps utilisent React, TypeScript et Tauri, ne demandent pas de compte et gardent vos données uniquement sur votre appareil.",
    ],
    values: [
      { title: "Sans compte", text: "Vous ouvrez l'app et vous l'utilisez. Aucune inscription, aucun mot de passe." },
      { title: "Données sur votre appareil", text: "Tout est enregistré localement ; il n'y a pas de serveurs propres." },
      { title: "Faites avec soin", text: "Des interfaces soignées, claires et sans distraction." },
    ],
  },
  projects: {
    title: "Projets",
    intro: "Quatre apps créées avec React, TypeScript et Tauri, avec une couche native sur Android.",
    published: "Publiée",
    development: "En développement",
    play: "Voir sur Google Play",
    zoom: "Agrandir : {alt}",
    close: "Fermer",
    chipsLabel: "Plateformes et technologies",
    shotAlt: "{app} : capture d'écran {n}",
  },
  contact: {
    title: "Contact",
    introGithub: "Découvrez plus de mon travail sur GitHub.",
    introEmail: "Des questions, des idées ou des remarques sur une app ? Écrivez-moi.",
    github: "GitHub · bbastiann",
  },
  footer: { country: "Chili", privacy: "Politique de confidentialité" },
  apps: {
    kaizen: {
      tagline: "Progressez un peu chaque jour",
      description:
        "Un suivi d'habitudes minimaliste et chaleureux. Cochez votre liste quotidienne, construisez des séries et suivez vos progrès par semaine, mois et année. Inclut des habitudes à arrêter, des catégories colorées et des widgets sur l'écran d'accueil.",
    },
    toki: {
      tagline: "Un Pomodoro serein pour étudier",
      description:
        "Un minuteur de concentration à l'ambiance cosy. Pomodoro, compte à rebours et chronomètre, avec horloge numérique, en anneau ou analogique, thèmes clair et sombre et statistiques de vos sessions de concentration.",
    },
    danjiki: {
      tagline: "Votre suivi de jeûne intermittent",
      description:
        "Suivez votre jeûne avec un chronomètre et des plans comme 16-8 ou 18-6. Découvrez les 11 étapes du corps pendant que vous jeûnez, notez votre poids et suivez votre évolution. Avec widget et alertes à chaque nouvelle étape. Disponible en 8 langues.",
    },
    "bolsillo-claro": {
      tagline: "Votre plafond et vos petites dépenses, en clair",
      description:
        "Gardez le contrôle du plafond de vos cartes de crédit et de vos petites dépenses du quotidien. Voyez ce qu'il vous reste, les dates de clôture et de paiement, un objectif mensuel avec alertes et un résumé par catégorie et par période.",
      note: "L'app n'est disponible qu'en espagnol.",
    },
  },
}
