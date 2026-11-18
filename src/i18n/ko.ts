import type { Dictionary } from "./types"

export const ko: Dictionary = {
  meta: {
    title: "Creative Island Software · 계정이 필요 없는 간단한 앱",
    description:
      "Creative Island Software: 계정 없이 쓰는 간단하고 아름다운 모바일 앱. 칠레의 Bastián Berríos가 개발한 Kaizen, Toki, Danjiki, Bolsillo Claro.",
  },
  nav: { label: "메인", about: "소개", projects: "프로젝트", contact: "문의" },
  hero: {
    eyebrow: "독립 개발 · 칠레",
    titleLine1: "간단하고,",
    titleLine2: "아름답고, 계정이 필요 없는.",
    lead: "Creative Island Software에서는 열자마자 바로 쓸 수 있는 Android·Windows 앱을 만듭니다. 가입 없이, 데이터는 내 기기에만 저장됩니다.",
    ctaProjects: "내 앱 보기",
    ctaContact: "문의",
    iconsLabel: "내 앱",
  },
  about: {
    title: "소개",
    paragraphs: [
      "칠레 출신 컴퓨터공학 엔지니어(Ingeniero Civil Informático) Bastián Berríos입니다. 소프트웨어와 게임 개발 경력이 5년 이상입니다. Creative Island Software는 제 독립 스튜디오로, 간단하고 아름다우며 개인정보를 존중하는 앱을 만드는 작은 섬입니다.",
      "요구사항 정리, 디자인, 프로그래밍, 테스트, 유지보수까지 제품 개발의 전 과정을 경험했습니다. 제 앱은 React, TypeScript, Tauri로 만들었고, 계정을 요구하지 않으며 데이터는 기기에만 저장됩니다.",
    ],
    values: [
      { title: "계정 없음", text: "앱을 열면 바로 사용할 수 있어요. 가입도 비밀번호도 필요 없습니다." },
      { title: "데이터는 내 기기에", text: "모든 것이 로컬에 저장되며, 자체 서버는 없습니다." },
      { title: "정성껏 만든 앱", text: "깔끔하고 명확하며 방해 없는 인터페이스." },
    ],
  },
  projects: {
    title: "프로젝트",
    intro: "React, TypeScript, Tauri로 만든 앱 네 개. Android에서는 네이티브 계층도 사용합니다.",
    published: "출시됨",
    development: "개발 중",
    play: "Google Play에서 보기",
    zoom: "확대: {alt}",
    close: "닫기",
    chipsLabel: "플랫폼 및 기술",
    shotAlt: "{app}: 스크린샷 {n}",
  },
  contact: {
    title: "문의",
    introGithub: "GitHub에서 더 많은 작업을 만나 보세요.",
    introEmail: "앱에 대한 질문, 아이디어, 의견이 있으신가요? 메일을 보내 주세요.",
    github: "GitHub · bbastiann",
  },
  footer: { country: "칠레", privacy: "개인정보 처리방침" },
  apps: {
    kaizen: {
      tagline: "매일 조금씩 나아지세요",
      description:
        "미니멀하고 포근한 습관 트래커. 하루 목록을 체크하고, 연속 기록을 쌓고, 주·월·연 단위로 진행 상황을 확인하세요. 끊고 싶은 습관, 색상 카테고리, 홈 화면 위젯도 지원합니다.",
    },
    toki: {
      tagline: "차분하게 공부하는 뽀모도로",
      description:
        "아늑한 분위기의 집중 타이머. 뽀모도로, 카운트다운, 스톱워치를 지원하고 디지털·링·아날로그 시계, 라이트/다크 테마, 집중 세션 통계를 제공합니다.",
    },
    danjiki: {
      tagline: "간헐적 단식 기록 앱",
      description:
        "타이머와 16-8, 18-6 같은 플랜으로 단식을 기록하세요. 단식 중 몸이 거치는 11단계를 알아보고, 체중을 기록해 변화를 확인할 수 있습니다. 위젯과 단계 변경 알림을 제공합니다. 8개 언어 지원.",
    },
    "bolsillo-claro": {
      tagline: "한도와 소소한 지출을 한눈에",
      description:
        "신용카드 한도와 일상의 소소한 지출을 관리하세요. 남은 금액, 마감일과 결제일, 알림이 있는 월간 목표, 카테고리별·기간별 요약을 확인할 수 있습니다.",
      note: "이 앱은 스페인어로만 제공됩니다.",
    },
  },
}
