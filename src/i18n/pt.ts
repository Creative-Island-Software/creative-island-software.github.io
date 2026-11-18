import type { Dictionary } from "./types"

export const pt: Dictionary = {
  meta: {
    title: "Creative Island Software · Apps simples e sem contas",
    description:
      "Creative Island Software: apps móveis simples e bonitos, sem contas. Kaizen, Toki, Danjiki e Bolsillo Claro, desenvolvidos por Bastián Berríos no Chile.",
  },
  nav: { label: "Principal", about: "Sobre", projects: "Projetos", contact: "Contato" },
  hero: {
    eyebrow: "Desenvolvimento independente · Chile",
    titleLine1: "Apps simples,",
    titleLine2: "bonitos e sem contas.",
    lead: "Na Creative Island Software eu faço apps para Android e Windows que você abre e usa: sem cadastro, com seus dados guardados no seu dispositivo.",
    ctaProjects: "Ver meus apps",
    ctaContact: "Contato",
    iconsLabel: "Meus apps",
  },
  about: {
    title: "Sobre",
    paragraphs: [
      "Sou Bastián Berríos, Engenheiro Civil de Informática (Ingeniero Civil Informático) do Chile, com mais de 5 anos de experiência em desenvolvimento de software e jogos. A Creative Island Software é meu estúdio independente: uma pequena ilha onde faço apps simples, bonitos e que respeitam a sua privacidade.",
      "Já participei de todo o ciclo de um produto: requisitos, design, programação, testes e manutenção. Meus apps usam React, TypeScript e Tauri, não pedem conta e guardam seus dados apenas no seu dispositivo.",
    ],
    values: [
      { title: "Sem contas", text: "Você abre o app e usa. Sem cadastro nem senhas." },
      { title: "Dados no seu dispositivo", text: "Tudo é guardado localmente; não há servidores próprios." },
      { title: "Feitos com carinho", text: "Interfaces cuidadas, claras e sem distrações." },
    ],
  },
  projects: {
    title: "Projetos",
    intro: "Quatro apps feitos com React, TypeScript e Tauri, com camada nativa no Android.",
    published: "Publicado",
    development: "Em desenvolvimento",
    play: "Ver no Google Play",
    zoom: "Ampliar: {alt}",
    close: "Fechar",
    chipsLabel: "Plataformas e tecnologia",
    shotAlt: "{app}: captura de tela {n}",
  },
  contact: {
    title: "Contato",
    introGithub: "Veja mais do meu trabalho no GitHub.",
    introEmail: "Dúvidas, ideias ou comentários sobre algum app? Escreva para mim.",
    github: "GitHub · bbastiann",
  },
  footer: { country: "Chile", privacy: "Política de privacidade" },
  apps: {
    kaizen: {
      tagline: "Melhore um pouco a cada dia",
      description:
        "Um rastreador de hábitos minimalista e aconchegante. Marque sua lista diária, construa sequências e acompanhe seu progresso por semana, mês e ano. Inclui hábitos para abandonar, categorias com cor e widgets na tela inicial.",
    },
    toki: {
      tagline: "Pomodoro sereno para estudar",
      description:
        "Um temporizador de concentração com visual aconchegante. Pomodoro, contagem regressiva e cronômetro, com relógios digital, de anel ou analógico, temas claro e escuro e estatísticas das suas sessões de foco.",
    },
    danjiki: {
      tagline: "Seu registro de jejum intermitente",
      description:
        "Registre seu jejum com um cronômetro e planos como 16-8 ou 18-6. Descubra as 11 etapas do corpo enquanto você jejua, anote seu peso e acompanhe sua evolução. Com widget e avisos a cada nova etapa. Disponível em 8 idiomas.",
    },
    "bolsillo-claro": {
      tagline: "Seu limite e seus gastos pequenos, claros",
      description:
        "Controle o limite dos seus cartões de crédito e seus gastos pequenos do dia a dia. Veja quanto resta, as datas de fechamento e de pagamento, uma meta mensal com alertas e um resumo por categoria e período.",
      note: "O app está disponível apenas em espanhol.",
    },
  },
}
