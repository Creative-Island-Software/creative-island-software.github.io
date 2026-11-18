// Genera la política de privacidad en 8 idiomas como páginas HTML estáticas dentro de public/.
//   Español -> public/privacy.html (la URL que va en Play Console)
//   Resto   -> public/privacy-<idioma>.html
// Uso: npm run privacy
import { writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "public")
const SITE_URL = "https://creative-island-software.github.io"

// PENDIENTE: correo público de contacto. Mientras esté vacío, cada página muestra un marcador.
const CONTACT_EMAIL = ""
// Fecha de última actualización (se formatea en cada idioma).
const UPDATED = new Date(Date.UTC(2026, 10, 18))
const GITHUB_URL = "https://github.com/bbastiann"

const LANGS = [
  { code: "es", name: "Español", locale: "es-CL", hl: "es-419" },
  { code: "en", name: "English", locale: "en-US", hl: "en" },
  { code: "pt", name: "Português (Brasil)", locale: "pt-BR", hl: "pt-BR" },
  { code: "fr", name: "Français", locale: "fr-FR", hl: "fr" },
  { code: "de", name: "Deutsch", locale: "de-DE", hl: "de" },
  { code: "it", name: "Italiano", locale: "it-IT", hl: "it" },
  { code: "ja", name: "日本語", locale: "ja-JP", hl: "ja" },
  { code: "ko", name: "한국어", locale: "ko-KR", hl: "ko" },
]

const T = {
  es: {
    title: "Política de privacidad · Creative Island Software",
    description: "Política de privacidad de las apps móviles de Creative Island Software, que usan Google AdMob.",
    back: "← Volver a Creative Island Software",
    h1: "Política de privacidad",
    updated: "Última actualización:",
    intro:
      "Esta política describe cómo tratan la información las aplicaciones móviles de <strong>Creative Island Software</strong>, desarrolladas por Bastián Berríos (Chile). Se aplica a las apps Kaizen, Toki, Danjiki y Bolsillo Claro, publicadas en Google Play.",
    s1: {
      h: "1. Lo que hacen (y no hacen) las apps",
      p: [
        "Nuestras apps no tienen cuentas de usuario ni servidores propios. <strong>No recopilamos, almacenamos ni recibimos datos personales por nuestra cuenta.</strong> La información que escribes en la app (por ejemplo hábitos, sesiones de estudio, ayunos, peso o gastos) se guarda únicamente en tu dispositivo y no se envía a nosotros.",
        "En Android, si tienes activada la copia de seguridad de Google, el sistema puede incluir los datos de la app en tu copia y restaurarlos en un teléfono nuevo. Esa copia la gestiona Google según su propia política.",
      ],
    },
    s2: {
      h: "2. Publicidad con Google AdMob",
      intro:
        "Las versiones gratuitas para Android muestran anuncios mediante <strong>Google AdMob</strong> (un anuncio al abrir la app; no usamos banners). Al hacerlo, el SDK de Google puede recopilar y usar automáticamente, según su propia política:",
      items: [
        "El <strong>ID de publicidad</strong> del dispositivo.",
        "<strong>Datos de uso</strong> de la app e interacciones con los anuncios.",
        "<strong>Datos del dispositivo</strong> (por ejemplo modelo, versión del sistema, idioma, dirección IP y ubicación aproximada) y datos de diagnóstico.",
      ],
      after:
        "Estos datos los recopila y gestiona Google, no Creative Island Software. Los usa para mostrar anuncios, medir su rendimiento y prevenir fraudes. En las regiones donde la ley lo exige, la app muestra un formulario de consentimiento (Google UMP) y respeta tu elección.",
      more: "Más información:",
      link1: "Política de privacidad de Google",
      link2: "Cómo usa Google los datos de sitios y apps que usan sus servicios",
    },
    s3: {
      h: "3. Tus opciones y derechos",
      items: [
        "<strong>Personalizar anuncios:</strong> puedes restablecer o eliminar el ID de publicidad, o desactivar la personalización de anuncios, en los ajustes de tu dispositivo (Ajustes de Google → Anuncios).",
        "<strong>Consentimiento:</strong> si la app te lo pidió, puedes cambiar tu elección desde la opción de privacidad dentro de la app, cuando esté disponible.",
        "<strong>Tus datos locales:</strong> como se guardan solo en tu dispositivo, puedes borrarlos en cualquier momento limpiando los datos de la app o desinstalándola.",
        "<strong>Acceso, rectificación y eliminación:</strong> como no tenemos tus datos personales, no hay nada que solicitarnos; para los datos que gestiona Google, puedes ejercer tus derechos directamente con Google.",
      ],
    },
    s4: { h: "4. Menores", p: "Las apps no están dirigidas a menores de 13 años y no recopilamos a sabiendas información de menores." },
    s5: { h: "5. Cambios en esta política", p: "Si cambiamos esta política, publicaremos la nueva versión en esta misma página con su fecha de actualización." },
    s6: { h: "6. Contacto", p: "Si tienes dudas sobre esta política, escríbenos a: {contact}." },
    pending: "[CORREO DE CONTACTO POR DEFINIR]",
  },
  en: {
    title: "Privacy policy · Creative Island Software",
    description: "Privacy policy for the mobile apps by Creative Island Software, which use Google AdMob.",
    back: "← Back to Creative Island Software",
    h1: "Privacy policy",
    updated: "Last updated:",
    intro:
      "This policy describes how the mobile apps by <strong>Creative Island Software</strong>, developed by Bastián Berríos (Chile), handle information. It applies to the apps Kaizen, Toki, Danjiki and Bolsillo Claro, published on Google Play.",
    s1: {
      h: "1. What the apps do (and don't do)",
      p: [
        "Our apps have no user accounts and no servers of our own. <strong>We do not collect, store or receive personal data on our own.</strong> The information you enter in the app (for example habits, study sessions, fasts, weight or expenses) is stored only on your device and is not sent to us.",
        "On Android, if Google backup is turned on, the system may include the app's data in your backup and restore it on a new phone. Google manages that backup under its own policy.",
      ],
    },
    s2: {
      h: "2. Advertising with Google AdMob",
      intro:
        "The free Android versions show ads through <strong>Google AdMob</strong> (one ad when the app opens; we do not use banners). When doing so, the Google SDK may automatically collect and use, under its own policy:",
      items: [
        "The device's <strong>advertising ID</strong>.",
        "App <strong>usage data</strong> and interactions with ads.",
        "<strong>Device data</strong> (for example model, system version, language, IP address and approximate location) and diagnostic data.",
      ],
      after:
        "This data is collected and managed by Google, not by Creative Island Software. Google uses it to show ads, measure their performance and prevent fraud. In regions where the law requires it, the app shows a consent form (Google UMP) and respects your choice.",
      more: "More information:",
      link1: "Google Privacy Policy",
      link2: "How Google uses data from sites and apps that use its services",
    },
    s3: {
      h: "3. Your choices and rights",
      items: [
        "<strong>Personalized ads:</strong> you can reset or delete your advertising ID, or turn off ad personalization, in your device settings (Google settings → Ads).",
        "<strong>Consent:</strong> if the app asked for it, you can change your choice from the in-app privacy option, when available.",
        "<strong>Your local data:</strong> since it is stored only on your device, you can delete it at any time by clearing the app's data or uninstalling it.",
        "<strong>Access, correction and deletion:</strong> since we do not hold your personal data, there is nothing to request from us; for the data Google manages, you can exercise your rights directly with Google.",
      ],
    },
    s4: { h: "4. Children", p: "The apps are not directed at children under 13 and we do not knowingly collect information from children." },
    s5: { h: "5. Changes to this policy", p: "If we change this policy, we will publish the new version on this same page with its update date." },
    s6: { h: "6. Contact", p: "If you have questions about this policy, write to us at: {contact}." },
    pending: "[CONTACT EMAIL TO BE DEFINED]",
  },
  pt: {
    title: "Política de privacidade · Creative Island Software",
    description: "Política de privacidade dos apps móveis da Creative Island Software, que usam o Google AdMob.",
    back: "← Voltar à Creative Island Software",
    h1: "Política de privacidade",
    updated: "Última atualização:",
    intro:
      "Esta política descreve como os aplicativos móveis da <strong>Creative Island Software</strong>, desenvolvidos por Bastián Berríos (Chile), tratam as informações. Aplica-se aos apps Kaizen, Toki, Danjiki e Bolsillo Claro, publicados no Google Play.",
    s1: {
      h: "1. O que os apps fazem (e não fazem)",
      p: [
        "Nossos apps não têm contas de usuário nem servidores próprios. <strong>Não coletamos, armazenamos nem recebemos dados pessoais por conta própria.</strong> As informações que você insere no app (por exemplo hábitos, sessões de estudo, jejuns, peso ou gastos) ficam guardadas apenas no seu dispositivo e não são enviadas a nós.",
        "No Android, se o backup do Google estiver ativado, o sistema pode incluir os dados do app no seu backup e restaurá-los em um celular novo. Esse backup é gerenciado pelo Google, de acordo com a política dele.",
      ],
    },
    s2: {
      h: "2. Publicidade com o Google AdMob",
      intro:
        "As versões gratuitas para Android exibem anúncios por meio do <strong>Google AdMob</strong> (um anúncio ao abrir o app; não usamos banners). Com isso, o SDK do Google pode coletar e usar automaticamente, conforme a política dele:",
      items: [
        "O <strong>ID de publicidade</strong> do dispositivo.",
        "<strong>Dados de uso</strong> do app e interações com os anúncios.",
        "<strong>Dados do dispositivo</strong> (por exemplo modelo, versão do sistema, idioma, endereço IP e localização aproximada) e dados de diagnóstico.",
      ],
      after:
        "Esses dados são coletados e gerenciados pelo Google, não pela Creative Island Software. O Google os usa para exibir anúncios, medir o desempenho deles e prevenir fraudes. Nas regiões em que a lei exige, o app mostra um formulário de consentimento (Google UMP) e respeita a sua escolha.",
      more: "Mais informações:",
      link1: "Política de Privacidade do Google",
      link2: "Como o Google usa dados de sites e apps que usam seus serviços",
    },
    s3: {
      h: "3. Suas opções e direitos",
      items: [
        "<strong>Anúncios personalizados:</strong> você pode redefinir ou excluir o ID de publicidade, ou desativar a personalização de anúncios, nas configurações do seu dispositivo (Configurações do Google → Anúncios).",
        "<strong>Consentimento:</strong> se o app pediu, você pode mudar sua escolha na opção de privacidade dentro do app, quando disponível.",
        "<strong>Seus dados locais:</strong> como ficam guardados apenas no seu dispositivo, você pode apagá-los a qualquer momento limpando os dados do app ou desinstalando-o.",
        "<strong>Acesso, retificação e exclusão:</strong> como não temos seus dados pessoais, não há nada a solicitar a nós; quanto aos dados que o Google gerencia, você pode exercer seus direitos diretamente com o Google.",
      ],
    },
    s4: { h: "4. Crianças", p: "Os apps não são direcionados a menores de 13 anos e não coletamos conscientemente informações de crianças." },
    s5: { h: "5. Alterações nesta política", p: "Se alterarmos esta política, publicaremos a nova versão nesta mesma página, com a data de atualização." },
    s6: { h: "6. Contato", p: "Se tiver dúvidas sobre esta política, escreva para: {contact}." },
    pending: "[E-MAIL DE CONTATO A DEFINIR]",
  },
  fr: {
    title: "Politique de confidentialité · Creative Island Software",
    description: "Politique de confidentialité des applications mobiles de Creative Island Software, qui utilisent Google AdMob.",
    back: "← Retour à Creative Island Software",
    h1: "Politique de confidentialité",
    updated: "Dernière mise à jour :",
    intro:
      "Cette politique décrit la façon dont les applications mobiles de <strong>Creative Island Software</strong>, développées par Bastián Berríos (Chili), traitent les informations. Elle s'applique aux apps Kaizen, Toki, Danjiki et Bolsillo Claro, publiées sur Google Play.",
    s1: {
      h: "1. Ce que font (et ne font pas) les apps",
      p: [
        "Nos apps n'ont ni comptes utilisateur ni serveurs propres. <strong>Nous ne collectons, ne stockons ni ne recevons de données personnelles de notre côté.</strong> Les informations que vous saisissez dans l'app (par exemple habitudes, sessions d'étude, jeûnes, poids ou dépenses) sont enregistrées uniquement sur votre appareil et ne nous sont pas envoyées.",
        "Sur Android, si la sauvegarde Google est activée, le système peut inclure les données de l'app dans votre sauvegarde et les restaurer sur un nouveau téléphone. Cette sauvegarde est gérée par Google selon sa propre politique.",
      ],
    },
    s2: {
      h: "2. Publicité avec Google AdMob",
      intro:
        "Les versions gratuites pour Android affichent des annonces via <strong>Google AdMob</strong> (une annonce à l'ouverture de l'app ; nous n'utilisons pas de bannières). Ce faisant, le SDK de Google peut collecter et utiliser automatiquement, selon sa propre politique :",
      items: [
        "L'<strong>identifiant publicitaire</strong> de l'appareil.",
        "Les <strong>données d'utilisation</strong> de l'app et les interactions avec les annonces.",
        "Les <strong>données de l'appareil</strong> (par exemple modèle, version du système, langue, adresse IP et position approximative) et les données de diagnostic.",
      ],
      after:
        "Ces données sont collectées et gérées par Google, et non par Creative Island Software. Google les utilise pour afficher des annonces, mesurer leurs performances et prévenir la fraude. Dans les régions où la loi l'exige, l'app affiche un formulaire de consentement (Google UMP) et respecte votre choix.",
      more: "Plus d'informations :",
      link1: "Politique de confidentialité de Google",
      link2: "Comment Google utilise les données des sites et apps qui utilisent ses services",
    },
    s3: {
      h: "3. Vos choix et vos droits",
      items: [
        "<strong>Annonces personnalisées :</strong> vous pouvez réinitialiser ou supprimer l'identifiant publicitaire, ou désactiver la personnalisation des annonces, dans les paramètres de votre appareil (Paramètres Google → Annonces).",
        "<strong>Consentement :</strong> si l'app vous l'a demandé, vous pouvez modifier votre choix depuis l'option de confidentialité dans l'app, lorsqu'elle est disponible.",
        "<strong>Vos données locales :</strong> comme elles sont enregistrées uniquement sur votre appareil, vous pouvez les supprimer à tout moment en effaçant les données de l'app ou en la désinstallant.",
        "<strong>Accès, rectification et suppression :</strong> comme nous ne détenons pas vos données personnelles, il n'y a rien à nous demander ; pour les données gérées par Google, vous pouvez exercer vos droits directement auprès de Google.",
      ],
    },
    s4: { h: "4. Mineurs", p: "Les apps ne s'adressent pas aux enfants de moins de 13 ans et nous ne collectons pas sciemment d'informations auprès de mineurs." },
    s5: { h: "5. Modifications de cette politique", p: "Si nous modifions cette politique, nous publierons la nouvelle version sur cette même page avec sa date de mise à jour." },
    s6: { h: "6. Contact", p: "Pour toute question sur cette politique, écrivez-nous à : {contact}." },
    pending: "[E-MAIL DE CONTACT À DÉFINIR]",
  },
  de: {
    title: "Datenschutzerklärung · Creative Island Software",
    description: "Datenschutzerklärung für die mobilen Apps von Creative Island Software, die Google AdMob verwenden.",
    back: "← Zurück zu Creative Island Software",
    h1: "Datenschutzerklärung",
    updated: "Zuletzt aktualisiert:",
    intro:
      "Diese Erklärung beschreibt, wie die mobilen Apps von <strong>Creative Island Software</strong>, entwickelt von Bastián Berríos (Chile), mit Informationen umgehen. Sie gilt für die Apps Kaizen, Toki, Danjiki und Bolsillo Claro, die bei Google Play veröffentlicht sind.",
    s1: {
      h: "1. Was die Apps tun (und nicht tun)",
      p: [
        "Unsere Apps haben keine Benutzerkonten und keine eigenen Server. <strong>Wir erheben, speichern oder erhalten von uns aus keine personenbezogenen Daten.</strong> Die Informationen, die du in der App eingibst (zum Beispiel Gewohnheiten, Lernsitzungen, Fastenzeiten, Gewicht oder Ausgaben), werden ausschließlich auf deinem Gerät gespeichert und nicht an uns gesendet.",
        "Unter Android kann das System die App-Daten in deine Sicherung aufnehmen und auf einem neuen Telefon wiederherstellen, wenn die Google-Sicherung aktiviert ist. Diese Sicherung wird von Google nach dessen eigener Richtlinie verwaltet.",
      ],
    },
    s2: {
      h: "2. Werbung mit Google AdMob",
      intro:
        "Die kostenlosen Android-Versionen zeigen Werbung über <strong>Google AdMob</strong> (eine Anzeige beim Öffnen der App; wir verwenden keine Banner). Dabei kann das Google-SDK nach seiner eigenen Richtlinie automatisch Folgendes erheben und verwenden:",
      items: [
        "Die <strong>Werbe-ID</strong> des Geräts.",
        "<strong>Nutzungsdaten</strong> der App und Interaktionen mit Anzeigen.",
        "<strong>Gerätedaten</strong> (zum Beispiel Modell, Systemversion, Sprache, IP-Adresse und ungefährer Standort) sowie Diagnosedaten.",
      ],
      after:
        "Diese Daten werden von Google erhoben und verwaltet, nicht von Creative Island Software. Google nutzt sie, um Anzeigen zu schalten, deren Leistung zu messen und Betrug zu verhindern. In Regionen, in denen das Gesetz es verlangt, zeigt die App ein Einwilligungsformular (Google UMP) und respektiert deine Entscheidung.",
      more: "Weitere Informationen:",
      link1: "Datenschutzerklärung von Google",
      link2: "Wie Google Daten von Websites und Apps verwendet, die seine Dienste nutzen",
    },
    s3: {
      h: "3. Deine Möglichkeiten und Rechte",
      items: [
        "<strong>Personalisierte Werbung:</strong> Du kannst die Werbe-ID zurücksetzen oder löschen oder die Anzeigenpersonalisierung in den Geräteeinstellungen deaktivieren (Google-Einstellungen → Anzeigen).",
        "<strong>Einwilligung:</strong> Wenn die App danach gefragt hat, kannst du deine Entscheidung über die Datenschutzoption in der App ändern, sofern verfügbar.",
        "<strong>Deine lokalen Daten:</strong> Da sie nur auf deinem Gerät gespeichert sind, kannst du sie jederzeit löschen, indem du die App-Daten löschst oder die App deinstallierst.",
        "<strong>Auskunft, Berichtigung und Löschung:</strong> Da wir keine personenbezogenen Daten von dir haben, gibt es bei uns nichts zu beantragen; für die von Google verwalteten Daten kannst du deine Rechte direkt bei Google ausüben.",
      ],
    },
    s4: { h: "4. Kinder", p: "Die Apps richten sich nicht an Kinder unter 13 Jahren, und wir erheben nicht wissentlich Informationen von Kindern." },
    s5: { h: "5. Änderungen dieser Erklärung", p: "Wenn wir diese Erklärung ändern, veröffentlichen wir die neue Fassung auf dieser Seite mit dem Datum der Aktualisierung." },
    s6: { h: "6. Kontakt", p: "Bei Fragen zu dieser Erklärung schreib uns an: {contact}." },
    pending: "[KONTAKT-E-MAIL NOCH FESTZULEGEN]",
  },
  it: {
    title: "Informativa sulla privacy · Creative Island Software",
    description: "Informativa sulla privacy delle app mobili di Creative Island Software, che usano Google AdMob.",
    back: "← Torna a Creative Island Software",
    h1: "Informativa sulla privacy",
    updated: "Ultimo aggiornamento:",
    intro:
      "Questa informativa descrive come le app mobili di <strong>Creative Island Software</strong>, sviluppate da Bastián Berríos (Cile), trattano le informazioni. Si applica alle app Kaizen, Toki, Danjiki e Bolsillo Claro, pubblicate su Google Play.",
    s1: {
      h: "1. Cosa fanno (e non fanno) le app",
      p: [
        "Le nostre app non hanno account utente né server propri. <strong>Non raccogliamo, non conserviamo e non riceviamo dati personali per conto nostro.</strong> Le informazioni che inserisci nell'app (ad esempio abitudini, sessioni di studio, digiuni, peso o spese) restano solo sul tuo dispositivo e non vengono inviate a noi.",
        "Su Android, se il backup di Google è attivo, il sistema può includere i dati dell'app nel tuo backup e ripristinarli su un nuovo telefono. Quel backup è gestito da Google secondo la sua politica.",
      ],
    },
    s2: {
      h: "2. Pubblicità con Google AdMob",
      intro:
        "Le versioni gratuite per Android mostrano annunci tramite <strong>Google AdMob</strong> (un annuncio all'apertura dell'app; non usiamo banner). In tal caso l'SDK di Google può raccogliere e usare automaticamente, secondo la sua politica:",
      items: [
        "L'<strong>ID pubblicità</strong> del dispositivo.",
        "I <strong>dati di utilizzo</strong> dell'app e le interazioni con gli annunci.",
        "I <strong>dati del dispositivo</strong> (ad esempio modello, versione del sistema, lingua, indirizzo IP e posizione approssimativa) e i dati diagnostici.",
      ],
      after:
        "Questi dati sono raccolti e gestiti da Google, non da Creative Island Software. Google li usa per mostrare annunci, misurarne le prestazioni e prevenire le frodi. Nelle regioni in cui la legge lo richiede, l'app mostra un modulo di consenso (Google UMP) e rispetta la tua scelta.",
      more: "Maggiori informazioni:",
      link1: "Informativa sulla privacy di Google",
      link2: "Come Google usa i dati di siti e app che utilizzano i suoi servizi",
    },
    s3: {
      h: "3. Le tue scelte e i tuoi diritti",
      items: [
        "<strong>Annunci personalizzati:</strong> puoi reimpostare o eliminare l'ID pubblicità, oppure disattivare la personalizzazione degli annunci, nelle impostazioni del dispositivo (Impostazioni Google → Annunci).",
        "<strong>Consenso:</strong> se l'app te lo ha chiesto, puoi cambiare la tua scelta dall'opzione sulla privacy all'interno dell'app, quando disponibile.",
        "<strong>I tuoi dati locali:</strong> poiché restano solo sul tuo dispositivo, puoi eliminarli in qualsiasi momento cancellando i dati dell'app o disinstallandola.",
        "<strong>Accesso, rettifica e cancellazione:</strong> poiché non abbiamo i tuoi dati personali, non c'è nulla da richiederci; per i dati gestiti da Google puoi esercitare i tuoi diritti direttamente con Google.",
      ],
    },
    s4: { h: "4. Minori", p: "Le app non sono rivolte ai minori di 13 anni e non raccogliamo consapevolmente informazioni sui minori." },
    s5: { h: "5. Modifiche a questa informativa", p: "Se modifichiamo questa informativa, pubblicheremo la nuova versione in questa stessa pagina con la data di aggiornamento." },
    s6: { h: "6. Contatti", p: "Per domande su questa informativa, scrivici a: {contact}." },
    pending: "[EMAIL DI CONTATTO DA DEFINIRE]",
  },
  ja: {
    title: "プライバシーポリシー · Creative Island Software",
    description: "Google AdMob を利用する Creative Island Software のモバイルアプリのプライバシーポリシー。",
    back: "← Creative Island Software に戻る",
    h1: "プライバシーポリシー",
    updated: "最終更新日:",
    intro:
      "本ポリシーは、Bastián Berríos(チリ)が開発する <strong>Creative Island Software</strong> のモバイルアプリが情報をどのように扱うかを説明するものです。Google Play で公開している Kaizen、Toki、Danjiki、Bolsillo Claro に適用されます。",
    s1: {
      h: "1. アプリが行うこと(行わないこと)",
      p: [
        "当社のアプリにはユーザーアカウントも独自のサーバーもありません。<strong>当社が独自に個人データを収集・保存・受信することはありません。</strong>アプリに入力した情報(習慣、学習セッション、断食、体重、支出など)は端末の中にのみ保存され、当社には送信されません。",
        "Android で Google バックアップが有効な場合、システムがアプリのデータをバックアップに含め、新しい端末で復元することがあります。このバックアップは Google が自社のポリシーに基づいて管理します。",
      ],
    },
    s2: {
      h: "2. Google AdMob による広告",
      intro:
        "Android の無料版では <strong>Google AdMob</strong> を通じて広告を表示します(アプリ起動時に広告を1回表示します。バナー広告は使用しません)。その際、Google の SDK は、Google 自身のポリシーに基づき、次の情報を自動的に収集・利用することがあります。",
      items: [
        "端末の<strong>広告 ID</strong>。",
        "アプリの<strong>利用データ</strong>と広告とのやり取り。",
        "<strong>端末データ</strong>(機種、OS バージョン、言語、IP アドレス、おおよその位置情報など)および診断データ。",
      ],
      after:
        "これらのデータは Creative Island Software ではなく Google が収集・管理します。Google は広告の表示、広告の効果測定、不正行為の防止のためにこれらを利用します。法律で求められる地域では、アプリは同意フォーム(Google UMP)を表示し、お客様の選択を尊重します。",
      more: "詳細:",
      link1: "Google プライバシー ポリシー",
      link2: "Google のサービスを使用するサイトやアプリからの情報を Google が使用する方法",
    },
    s3: {
      h: "3. お客様の選択肢と権利",
      items: [
        "<strong>パーソナライズ広告:</strong>端末の設定(Google の設定 → 広告)で、広告 ID のリセットや削除、広告のパーソナライズの無効化ができます。",
        "<strong>同意:</strong>アプリが同意を求めた場合は、利用可能なときにアプリ内のプライバシー オプションから選択を変更できます。",
        "<strong>端末内のデータ:</strong>データは端末の中にのみ保存されるため、アプリのデータを消去するかアンインストールすれば、いつでも削除できます。",
        "<strong>開示・訂正・削除:</strong>当社はお客様の個人データを保有していないため、当社に請求できる内容はありません。Google が管理するデータについては、Google に直接権利を行使できます。",
      ],
    },
    s4: { h: "4. 未成年者", p: "本アプリは13歳未満のお子様を対象としておらず、当社が意図的に子どもの情報を収集することはありません。" },
    s5: { h: "5. 本ポリシーの変更", p: "本ポリシーを変更する場合は、このページに更新日とともに新しい版を掲載します。" },
    s6: { h: "6. お問い合わせ", p: "本ポリシーについてのご質問は、次の宛先までご連絡ください:{contact}。" },
    pending: "[連絡先メールアドレスは未定]",
  },
  ko: {
    title: "개인정보 처리방침 · Creative Island Software",
    description: "Google AdMob을 사용하는 Creative Island Software 모바일 앱의 개인정보 처리방침.",
    back: "← Creative Island Software로 돌아가기",
    h1: "개인정보 처리방침",
    updated: "최종 업데이트:",
    intro:
      "이 방침은 Bastián Berríos(칠레)가 개발한 <strong>Creative Island Software</strong>의 모바일 앱이 정보를 어떻게 다루는지 설명합니다. Google Play에 게시된 Kaizen, Toki, Danjiki, Bolsillo Claro 앱에 적용됩니다.",
    s1: {
      h: "1. 앱이 하는 일(그리고 하지 않는 일)",
      p: [
        "저희 앱에는 사용자 계정도, 자체 서버도 없습니다. <strong>저희는 개인정보를 자체적으로 수집, 저장, 수신하지 않습니다.</strong> 앱에 입력한 정보(예: 습관, 학습 세션, 단식, 체중, 지출)는 기기에만 저장되며 저희에게 전송되지 않습니다.",
        "Android에서 Google 백업이 켜져 있으면 시스템이 앱 데이터를 백업에 포함하고 새 휴대폰에서 복원할 수 있습니다. 이 백업은 Google이 자체 정책에 따라 관리합니다.",
      ],
    },
    s2: {
      h: "2. Google AdMob 광고",
      intro:
        "Android 무료 버전은 <strong>Google AdMob</strong>을 통해 광고를 표시합니다(앱을 열 때 광고 1회, 배너는 사용하지 않음). 이때 Google SDK는 Google의 자체 정책에 따라 다음 정보를 자동으로 수집하고 사용할 수 있습니다.",
      items: [
        "기기의 <strong>광고 ID</strong>.",
        "앱 <strong>사용 데이터</strong> 및 광고와의 상호작용.",
        "<strong>기기 데이터</strong>(예: 모델, 시스템 버전, 언어, IP 주소, 대략적인 위치) 및 진단 데이터.",
      ],
      after:
        "이 데이터는 Creative Island Software가 아니라 Google이 수집하고 관리합니다. Google은 광고 표시, 광고 성과 측정, 부정 행위 방지에 이를 사용합니다. 법에서 요구하는 지역에서는 앱이 동의 양식(Google UMP)을 표시하고 사용자의 선택을 존중합니다.",
      more: "자세한 정보:",
      link1: "Google 개인정보처리방침",
      link2: "Google 서비스를 사용하는 사이트 및 앱의 정보를 Google이 사용하는 방법",
    },
    s3: {
      h: "3. 사용자의 선택과 권리",
      items: [
        "<strong>맞춤 광고:</strong> 기기 설정(Google 설정 → 광고)에서 광고 ID를 재설정하거나 삭제하고, 광고 맞춤설정을 끌 수 있습니다.",
        "<strong>동의:</strong> 앱이 동의를 요청했다면, 제공되는 경우 앱 내 개인정보 옵션에서 선택을 변경할 수 있습니다.",
        "<strong>기기 내 데이터:</strong> 데이터는 기기에만 저장되므로 앱 데이터를 지우거나 앱을 삭제하면 언제든 삭제할 수 있습니다.",
        "<strong>열람, 정정, 삭제:</strong> 저희는 사용자의 개인정보를 보유하지 않으므로 저희에게 요청할 내용이 없습니다. Google이 관리하는 데이터에 대해서는 Google에 직접 권리를 행사할 수 있습니다.",
      ],
    },
    s4: { h: "4. 아동", p: "앱은 만 13세 미만 아동을 대상으로 하지 않으며, 저희는 아동의 정보를 알면서 수집하지 않습니다." },
    s5: { h: "5. 방침 변경", p: "이 방침을 변경하면 업데이트 날짜와 함께 새 버전을 이 페이지에 게시합니다." },
    s6: { h: "6. 문의", p: "이 방침에 대한 문의는 다음 주소로 보내 주세요: {contact}." },
    pending: "[문의 이메일 미정]",
  },
}

const fileName = (code) => (code === "es" ? "privacy.html" : `privacy-${code}.html`)

const STYLE = `
    :root { --bg:#0b1220; --surface:#131c2e; --border:#22304d; --text:#e8edf6; --muted:#a6b2c8; --teal:#2dd9a8; }
    * { box-sizing: border-box; }
    body { margin:0; background:var(--bg); color:var(--text); line-height:1.7;
           font-family:'Segoe UI',system-ui,-apple-system,Roboto,'Helvetica Neue',Arial,sans-serif; }
    main { max-width: 760px; margin: 0 auto; padding: 40px 20px 64px; }
    a { color: var(--teal); }
    h1 { font-size: clamp(1.7rem, 5vw, 2.3rem); line-height:1.2; margin: 24px 0 8px; }
    h2 { font-size: 1.25rem; margin: 36px 0 8px; }
    p, li { color: var(--muted); }
    ul { padding-left: 1.2rem; }
    .top { display:flex; flex-wrap:wrap; gap:12px 20px; align-items:center; justify-content:space-between; }
    .back { text-decoration:none; font-size:.95rem; }
    .langs { display:flex; flex-wrap:wrap; gap:6px 14px; font-size:.9rem; }
    .langs a { text-decoration:none; color:var(--muted); }
    .langs a:hover { color:var(--text); }
    .langs strong { color:var(--text); }
    .meta { color: var(--muted); font-size:.95rem; }
    .box { background:var(--surface); border:1px solid var(--border); border-radius:16px; padding:16px 20px; margin:16px 0; }
    footer { margin-top: 48px; padding-top: 20px; border-top: 1px solid var(--border); color: var(--muted); font-size:.9rem; }
`

function page(lang) {
  const t = T[lang.code]
  const date = new Intl.DateTimeFormat(lang.locale, { dateStyle: "long", timeZone: "UTC" }).format(UPDATED)
  const contact = CONTACT_EMAIL
    ? `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`
    : `<strong>${t.pending}</strong>`
  const googleHref = (path) => `https://policies.google.com/${path}?hl=${lang.hl}`
  const alternates = LANGS.map(
    (l) => `  <link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/${fileName(l.code)}" />`,
  ).join("\n")
  const switcher = LANGS.map((l) =>
    l.code === lang.code ? `<strong>${l.name}</strong>` : `<a href="/${fileName(l.code)}" hreflang="${l.code}" lang="${l.code}">${l.name}</a>`,
  ).join("\n        ")

  return `<!doctype html>
<html lang="${lang.code}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t.title}</title>
  <meta name="description" content="${t.description}" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#0b1220" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="canonical" href="${SITE_URL}/${fileName(lang.code)}" />
${alternates}
  <style>${STYLE}  </style>
</head>
<body>
  <main>
    <div class="top">
      <a class="back" href="/">${t.back}</a>
      <nav class="langs" aria-label="Language / Idioma">
        ${switcher}
      </nav>
    </div>
    <h1>${t.h1}</h1>
    <p class="meta">${t.updated} ${date}</p>

    <p>${t.intro}</p>

    <h2>${t.s1.h}</h2>
${t.s1.p.map((p) => `    <p>${p}</p>`).join("\n")}

    <h2>${t.s2.h}</h2>
    <p>${t.s2.intro}</p>
    <ul>
${t.s2.items.map((i) => `      <li>${i}</li>`).join("\n")}
    </ul>
    <p>${t.s2.after}</p>
    <div class="box">
      <p style="margin:0">
        ${t.s2.more} <a href="${googleHref("privacy")}" target="_blank" rel="noopener noreferrer">${t.s2.link1}</a> ·
        <a href="${googleHref("technologies/partner-sites")}" target="_blank" rel="noopener noreferrer">${t.s2.link2}</a>.
      </p>
    </div>

    <h2>${t.s3.h}</h2>
    <ul>
${t.s3.items.map((i) => `      <li>${i}</li>`).join("\n")}
    </ul>

    <h2>${t.s4.h}</h2>
    <p>${t.s4.p}</p>

    <h2>${t.s5.h}</h2>
    <p>${t.s5.p}</p>

    <h2>${t.s6.h}</h2>
    <p>${t.s6.p.replace("{contact}", contact)}</p>

    <footer>© Creative Island Software · Bastián Berríos · <a href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer">GitHub</a></footer>
  </main>
</body>
</html>
`
}

for (const lang of LANGS) {
  writeFileSync(join(OUT_DIR, fileName(lang.code)), page(lang), "utf8")
  console.log("OK", fileName(lang.code))
}
