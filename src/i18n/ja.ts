import type { Dictionary } from "./types"

export const ja: Dictionary = {
  meta: {
    title: "Creative Island Software · アカウント不要のシンプルなアプリ",
    description:
      "Creative Island Software:アカウント不要で、シンプルで美しいモバイルアプリ。チリの Bastián Berríos が開発した Kaizen、Toki、Danjiki、Bolsillo Claro。",
  },
  nav: { label: "メイン", about: "概要", projects: "プロジェクト", contact: "お問い合わせ" },
  hero: {
    eyebrow: "個人開発 · チリ",
    titleLine1: "シンプルで、",
    titleLine2: "美しく、アカウント不要。",
    lead: "Creative Island Software では、開いてすぐ使える Android / Windows アプリを作っています。登録は不要で、データは端末の中だけに保存されます。",
    ctaProjects: "アプリを見る",
    ctaContact: "お問い合わせ",
    iconsLabel: "私のアプリ",
  },
  about: {
    title: "概要",
    paragraphs: [
      "チリ出身の情報工学エンジニア(Ingeniero Civil Informático)、Bastián Berríos です。ソフトウェアとゲーム開発で5年以上の経験があります。Creative Island Software は私の個人スタジオで、シンプルで美しく、プライバシーを大切にするアプリを作る小さな島です。",
      "要件定義、設計、プログラミング、テスト、保守まで、製品開発の全工程に携わってきました。アプリは React、TypeScript、Tauri で作られており、アカウントは不要で、データは端末の中だけに保存されます。",
    ],
    values: [
      { title: "アカウント不要", text: "アプリを開けばすぐ使えます。登録もパスワードも不要です。" },
      { title: "データは端末の中に", text: "すべてローカルに保存。独自のサーバーはありません。" },
      { title: "心を込めて", text: "丁寧で分かりやすく、気が散らないデザイン。" },
    ],
  },
  projects: {
    title: "プロジェクト",
    intro: "React、TypeScript、Tauri で作った4つのアプリ。Android ではネイティブ層も使っています。",
    published: "公開中",
    development: "開発中",
    play: "Google Play で見る",
    zoom: "拡大:{alt}",
    close: "閉じる",
    chipsLabel: "プラットフォームと技術",
    shotAlt: "{app}:スクリーンショット {n}",
  },
  contact: {
    title: "お問い合わせ",
    introGithub: "GitHub で他の作品もご覧いただけます。",
    introEmail: "アプリについてのご質問やご意見はこちらへ。",
    github: "GitHub · bbastiann",
  },
  footer: { country: "チリ", privacy: "プライバシーポリシー" },
  apps: {
    kaizen: {
      tagline: "毎日、少しずつ良くなる",
      description:
        "ミニマルで居心地のいい習慣トラッカー。毎日のリストをチェックし、連続記録を伸ばし、週・月・年ごとの進捗を確認できます。やめたい習慣、色分けカテゴリ、ホーム画面ウィジェットにも対応。",
    },
    toki: {
      tagline: "落ち着いて勉強できるポモドーロ",
      description:
        "くつろげる雰囲気の集中タイマー。ポモドーロ、カウントダウン、ストップウォッチに対応し、デジタル・リング・アナログの時計、ライト/ダークテーマ、集中セッションの統計を備えています。",
    },
    danjiki: {
      tagline: "間欠的断食の記録アプリ",
      description:
        "タイマーと 16-8 や 18-6 などのプランで断食を記録。断食中に体が通る11の段階を知り、体重を記録して推移を確認できます。ウィジェットと、段階が変わるときの通知付き。8言語に対応。",
    },
    "bolsillo-claro": {
      tagline: "利用限度額と小さな出費を、すっきり把握",
      description:
        "クレジットカードの利用限度額と、日々の小さな出費を管理。残りの金額、締め日と支払日、アラート付きの月間目標、カテゴリ別・期間別の集計を確認できます。",
      note: "このアプリはスペイン語のみ対応です。",
    },
  },
}
