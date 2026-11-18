import type { Dictionary } from "./types"

export const it: Dictionary = {
  meta: {
    title: "Creative Island Software · App semplici, senza account",
    description:
      "Creative Island Software: app mobili semplici e belle, senza account. Kaizen, Toki, Danjiki e Bolsillo Claro, sviluppate da Bastián Berríos in Cile.",
  },
  nav: { label: "Principale", about: "Chi sono", projects: "Progetti", contact: "Contatti" },
  hero: {
    eyebrow: "Sviluppo indipendente · Cile",
    titleLine1: "App semplici,",
    titleLine2: "belle e senza account.",
    lead: "Con Creative Island Software creo app per Android e Windows che si aprono e si usano: senza registrazione, con i tuoi dati salvati sul tuo dispositivo.",
    ctaProjects: "Vedi le mie app",
    ctaContact: "Contatti",
    iconsLabel: "Le mie app",
  },
  about: {
    title: "Chi sono",
    paragraphs: [
      "Sono Bastián Berríos, ingegnere informatico (Ingeniero Civil Informático) cileno, con oltre 5 anni di esperienza nello sviluppo di software e videogiochi. Creative Island Software è il mio studio indipendente: una piccola isola dove creo app semplici, belle e rispettose della tua privacy.",
      "Ho partecipato all'intero ciclo di un prodotto: requisiti, progettazione, programmazione, test e manutenzione. Le mie app usano React, TypeScript e Tauri, non richiedono un account e conservano i tuoi dati solo sul tuo dispositivo.",
    ],
    values: [
      { title: "Senza account", text: "Apri l'app e la usi. Nessuna registrazione, nessuna password." },
      { title: "Dati sul tuo dispositivo", text: "Tutto viene salvato in locale; non ci sono server propri." },
      { title: "Fatte con cura", text: "Interfacce curate, chiare e senza distrazioni." },
    ],
  },
  projects: {
    title: "Progetti",
    intro: "Quattro app create con React, TypeScript e Tauri, con livello nativo su Android.",
    published: "Pubblicata",
    development: "In sviluppo",
    play: "Scarica da Google Play",
    zoom: "Ingrandisci: {alt}",
    close: "Chiudi",
    chipsLabel: "Piattaforme e tecnologia",
    shotAlt: "{app}: schermata {n}",
  },
  contact: {
    title: "Contatti",
    introGithub: "Scopri altri miei lavori su GitHub.",
    introEmail: "Domande, idee o commenti su un'app? Scrivimi.",
    github: "GitHub · bbastiann",
  },
  footer: { country: "Cile", privacy: "Informativa sulla privacy" },
  apps: {
    kaizen: {
      tagline: "Migliora un po' ogni giorno",
      description:
        "Un tracker di abitudini minimalista e accogliente. Spunta la tua lista quotidiana, costruisci serie e guarda i progressi per settimana, mese e anno. Include abitudini da abbandonare, categorie colorate e widget nella schermata iniziale.",
    },
    toki: {
      tagline: "Pomodoro sereno per studiare",
      description:
        "Un timer di concentrazione dall'atmosfera accogliente. Pomodoro, conto alla rovescia e cronometro, con orologi digitale, ad anello o analogico, temi chiaro e scuro e statistiche delle tue sessioni di focus.",
    },
    danjiki: {
      tagline: "Il tuo diario del digiuno intermittente",
      description:
        "Registra il tuo digiuno con un cronometro e piani come 16-8 o 18-6. Scopri le 11 fasi del corpo mentre digiuni, annota il tuo peso e segui la tua evoluzione. Con widget e avvisi a ogni nuova fase. Disponibile in 8 lingue.",
    },
    "bolsillo-claro": {
      tagline: "Il tuo plafond e le piccole spese, chiari",
      description:
        "Tieni sotto controllo il plafond delle tue carte di credito e le piccole spese di ogni giorno. Vedi quanto ti resta, le date di chiusura e di pagamento, un obiettivo mensile con avvisi e un riepilogo per categoria e periodo.",
      note: "L'app è disponibile solo in spagnolo.",
    },
  },
}
