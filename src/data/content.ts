export type Locale = "en" | "he";

export const links = {
  email: "tanidgar@gmail.com",
  phone: "+972-52-8635700",
  phoneHref: "tel:+972528635700",
  cvPath: "/Tzahi_Anidgar_CV.pdf",
  photo: "/tzahi.png",
  linkedin: "https://www.linkedin.com/in/tzahi-anidgar-b8947b255",
  youtube: "https://www.youtube.com/@FromZeroToPilot",
  location: "Israel",
} as const;

export const skills = [
  "Playwright",
  "Selenium",
  "TestCafe",
  "Protractor",
  "TypeScript",
  "JavaScript",
  "C#",
  "Node.js",
  "COBOL",
  "Java",
  "CI/CD",
  "SQL Server",
  "Oracle",
  "MySQL",
  "DB2",
  "Agile",
] as const;

type LocalizedString = Record<Locale, string>;

export type ExperienceItem = {
  id: string;
  period: string;
  highlight: boolean;
  role: LocalizedString;
  company: LocalizedString;
  bullets: LocalizedString[];
};

export const experience: ExperienceItem[] = [
  {
    id: "youcc-head",
    period: "2025 – 2026",
    highlight: true,
    role: {
      en: "Head of QA Department",
      he: "מנהל מחלקת QA",
    },
    company: {
      en: "YouCC",
      he: "יוסיסי (YouCC)",
    },
    bullets: [
      {
        en: "Defined and executed company-wide automation strategy and QA roadmap",
        he: "הגדרתי והובלתי אסטרטגיית אוטומציה ו־QA לכלל החברה",
      },
      {
        en: "Architected scalable automation solutions (UI, API, Integration, E2E)",
        he: "תכננתי פתרונות אוטומציה סקיילביליים (UI, API, Integration, E2E)",
      },
      {
        en: "Built frameworks from scratch and integrated CI/CD with Quality Gates",
        he: "בניתי פריימוורקים מאפס ושילבתי CI/CD עם Quality Gates",
      },
      {
        en: "Led QA and automation for Agentic AI solutions — validating AI-driven workflows, agents, and integrations",
        he: "הובלתי QA ואוטומציה לפתרונות Agentic AI — כולל אימות workflows, agents ואינטגרציות",
      },
      {
        en: "Managed teams, hiring, mentoring, and engineering standards; defined KPIs and quality improvement",
        he: "ניהלתי צוותים, גיוס, מנטורינג וסטנדרטים הנדסיים; הגדרתי KPIs ושיפור איכות מתמשך",
      },
    ],
  },
  {
    id: "youcc-lead",
    period: "2022 – 2025",
    highlight: false,
    role: {
      en: "Automation Team Lead",
      he: "ראש צוות אוטומציה",
    },
    company: {
      en: "YouCC (GoTech)",
      he: "יוסיסי (GoTech)",
    },
    bullets: [
      {
        en: "Led Agile teams and delivered end-to-end automation solutions",
        he: "הובלתי צוותי Agile וסיפקתי פתרונות אוטומציה מקצה לקצה",
      },
      {
        en: "Built automation infrastructures across multiple technologies",
        he: "בניתי תשתיות אוטומציה על גבי טכנולוגיות מרובות",
      },
    ],
  },
  {
    id: "elbit",
    period: "2021 – 2022",
    highlight: false,
    role: {
      en: "Automation Developer",
      he: "מפתח אוטומציה",
    },
    company: {
      en: "Elbit Systems",
      he: "אלביט מערכות",
    },
    bullets: [
      {
        en: "Developed automation infrastructure for UAV systems",
        he: "פיתחתי תשתיות אוטומציה למערכות כטב״ם (UAV)",
      },
      {
        en: "Implemented tests using Node.js and C# (NUnit)",
        he: "מימשתי בדיקות ב־Node.js וב־C# (NUnit)",
      },
    ],
  },
  {
    id: "discount",
    period: "2018 – 2020",
    highlight: false,
    role: {
      en: "COBOL Developer",
      he: "מפתח COBOL",
    },
    company: {
      en: "Discount Bank",
      he: "בנק דיסקונט",
    },
    bullets: [
      {
        en: "Developed and maintained COBOL systems for core banking workflows",
        he: "פיתוח ותחזוקה של מערכות COBOL לתהליכי ליבה בנקאיים",
      },
    ],
  },
  {
    id: "clal",
    period: "2015 – 2018",
    highlight: false,
    role: {
      en: "Automation & COBOL Developer",
      he: "מפתח אוטומציה ומפתח COBOL",
    },
    company: {
      en: "Clal Insurance",
      he: "כלל ביטוח",
    },
    bullets: [
      {
        en: "Developed test automation and COBOL applications in an insurance environment",
        he: "פיתוח אוטומציית בדיקות ויישומי COBOL בסביבת ביטוח",
      },
      {
        en: "Worked with automation tooling such as UFT, Selenium, JavaScript, and C#",
        he: "עבודה עם כלי אוטומציה כמו UFT, Selenium, JavaScript ו־C#",
      },
    ],
  },
];

export const education = [
  {
    id: "afeka",
    title: {
      en: "Practical Software Engineering",
      he: "הנדסאי תוכנה",
    },
    place: {
      en: "Afeka College",
      he: "מכללת אפקה",
    },
  },
  {
    id: "kadoorie",
    title: {
      en: "Practical Mechanical Engineering",
      he: "הנדסאי מכונות",
    },
    place: {
      en: "Kadoorie College",
      he: "מכללת כדורי",
    },
  },
  {
    id: "idf",
    title: {
      en: "Ordnance Commander",
      he: "מפקד חימוש",
    },
    place: {
      en: "IDF — Career Service",
      he: "צה״ל — שירות קבע",
    },
  },
] as const;

export const passions = [
  {
    id: "aviation",
    icon: "plane" as const,
    href: links.youtube,
    title: { en: "Aviation", he: "תעופה" },
    description: {
      en: 'Training for a Private Pilot License (PPL) on a Cessna 152, and running the YouTube channel "From Zero to Pilot".',
      he: "לומד לרישיון טיס פרטי (PPL) על Cessna 152, ומפעיל את ערוץ היוטיוב From Zero to Pilot.",
    },
  },
  {
    id: "maker",
    icon: "cpu" as const,
    title: { en: "Maker / Tech", he: "מייקר / טק" },
    description: {
      en: "3D printing enthusiast focused on custom 3D modeling and IoT hardware development with ESP32.",
      he: "חובב הדפסת תלת־ממד, מידול מותאם אישית ופיתוח חומרה IoT עם ESP32.",
    },
  },
  {
    id: "gaming",
    icon: "dice" as const,
    title: { en: "Tabletop Gaming", he: "משחקי לוח" },
    description: {
      en: "Strategic board game player and Pokémon TCG collector/player.",
      he: "שחקן משחקי לוח אסטרטגיים ואספן/שחקן Pokémon TCG.",
    },
  },
  {
    id: "community",
    icon: "heart" as const,
    title: { en: "Community", he: "קהילה" },
    description: {
      en: "Volunteer EMT at United Hatzalah & Israel Police.",
      he: "מתנדב חובש באיחוד הצלה ובמשטרת ישראל.",
    },
  },
] as const;

export const ui = {
  en: {
    name: "Tzahi (Itzhak) Anidgar",
    shortName: "Tzahi Anidgar",
    tagline:
      "Head of QA | Automation & Quality Engineering Leader | Maker & Pilot in Training",
    intro:
      "Driving quality and automation in tech, while exploring the skies and building physical creations offline.",
    badge: "Open to conversations at conferences & beyond",
    connectCta: "Let's Connect",
    callCta: "Call Me",
    downloadCv: "Download CV",
    downloadCvAria: "Download CV as PDF",
    experienceEyebrow: "Career",
    experienceTitle: "Professional Experience",
    experienceDesc:
      "Quality leadership, automation architecture, and delivery across AI, defense, insurance, and banking.",
    skillsTitle: "Technical Skills",
    educationEyebrow: "Background",
    educationTitle: "Education & Service",
    educationDesc: "Engineering foundations and military leadership.",
    passionsEyebrow: "Beyond the Code",
    passionsTitle: "Passions & Projects",
    passionsDesc:
      "What I build, fly, play, and volunteer for when the laptop is closed.",
    watchChannel: "Watch channel",
    connectEyebrow: "Contact",
    connectTitle: "Let's talk",
    connectDesc:
      "Scanning a QR at a conference? Reach out — happy to chat about quality engineering, automation, aviation, or makerspace projects.",
    linkedin: "LinkedIn",
    youtube: "YouTube",
    nav: {
      home: "Home",
      experience: "Work",
      passions: "Beyond",
      connect: "Connect",
    },
    langSwitch: "עברית",
    navAria: "Primary",
    visitorsLabel: "Unique visitors",
  },
  he: {
    name: "צחי (יצחק) אנידג׳אר",
    shortName: "צחי אנידג׳אר",
    tagline:
      "מנהל QA | מוביל אוטומציה והנדסת איכות | מייקר וטייס בהכשרה",
    intro:
      "מוביל איכות ואוטומציה בעולם הטק, ובמקביל חוקר את השמיים ובונה יצירות פיזיות מחוץ למקלדת.",
    badge: "פתוח לשיחות בכנסים ומעבר להם",
    connectCta: "בואו נדבר",
    callCta: "התקשרו אליי",
    downloadCv: "הורדת קו״ח",
    downloadCvAria: "הורדת קורות חיים כ־PDF",
    experienceEyebrow: "קריירה",
    experienceTitle: "ניסיון מקצועי",
    experienceDesc:
      "מנהיגות איכות, ארכיטקטורת אוטומציה ומסירה ב־AI, ביטחון, ביטוח ובנקאות.",
    skillsTitle: "מיומנויות טכניות",
    educationEyebrow: "רקע",
    educationTitle: "השכלה ושירות",
    educationDesc: "בסיס הנדסי ומנהיגות צבאית.",
    passionsEyebrow: "מעבר לקוד",
    passionsTitle: "תחומי עניין ופרויקטים",
    passionsDesc: "מה שאני בונה, טס, משחק ומתנדב אליו כשהלפטופ סגור.",
    watchChannel: "לצפייה בערוץ",
    connectEyebrow: "יצירת קשר",
    connectTitle: "בואו נדבר",
    connectDesc:
      "סרקתם QR בכנס? דברו איתי — אשמח על שיחה על הנדסת איכות, אוטומציה, תעופה או פרויקטי מייקר.",
    linkedin: "לינקדאין",
    youtube: "יוטיוב",
    nav: {
      home: "בית",
      experience: "עבודה",
      passions: "עוד",
      connect: "קשר",
    },
    langSwitch: "EN",
    navAria: "ניווט ראשי",
    visitorsLabel: "מבקרים ייחודיים",
  },
} as const;

export const navIds = [
  "home",
  "experience",
  "passions",
  "connect",
] as const;
