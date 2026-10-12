export const profile = {
  name: "Nyoman Arie Pranasakti",
  title: "Full-Stack Developer",
  location: "South Tangerang, Banten, Indonesia",
  summary:
    "I'm a passionate self-taught programmer, worked in multiple international companies. Working on full-stack web and mobile application projects for 10+ years.",
  email: "a.pranasakti@gmail.com",
  phone: "+62 87771424780",
  linkedin: "https://linkedin.com/in/586a3b14b",
  github: "https://github.com/arie741",
  cvFile: "/Nyoman-Arie-Pranasakti-CV.pdf",
  photo: "/photo.png",
  country: "Indonesia",
};

export const topSkills = ["React.js / Next.js", "Node.js", "Go", "AWS", "Docker"];

export const skills = [
  "React.js / Next.js",
  "React Native",
  "Node.js",
  "Jest",
  "RESTful API",
  "gRPC",
  "GraphQL",
  "Go",
  "HTMX",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Docker / K8s",
  "PHP",
  "Clojure",
  "Github",
  "Claude Code",
  "Copilot",
];

export const languages = [
  { name: "Bahasa Indonesia", level: "Native" },
  { name: "English", level: "Fluent" },
];

export type Experience = {
  period: string;
  location: string;
  role: string;
  company: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    period: "Feb 2022 — Aug 2026",
    location: "Australia",
    role: "Full Stack Developer",
    company: "Green Energy Trading",
    bullets: [
      "Tailor in-house multiple energy certificate calculation software using React.js, Node.js, TypeScript, AWS, and Jest to expand our market reach in Australia's green energy market.",
      "Maintain and manage microservices using GraphQL, gRPC, PostgreSQL, and Docker/Kubernetes as we develop new calculation software and business logic.",
      "Multiply the velocity of our coding workflows by using AI models like Claude Code and GitHub Copilot with a strict code-review methodology.",
    ],
  },
  {
    period: "Jul 2021 — Mar 2022",
    location: "South Korea",
    role: "Full-Stack Developer",
    company: "Energy X (에너지엑스)",
    bullets: [
      "Built from scratch and maintain data-simulation applications driven by complex algorithms and data presentation layers using React.js, Next.js, Go, MongoDB, and AWS to replace old calculation software for the finance department.",
    ],
  },
  {
    period: "Jan 2020 — Feb 2020",
    location: "Singapore",
    role: "Full Stack Engineer",
    company: "Stranger Soccer",
    bullets: [
      "Improved the workflow of in-house development by implementing version control using GitHub and unit testing methodology using Jest.",
      "Shipped new features such as \"add a friend\" and promo code features using mainly PHP and MySQL.",
    ],
  },
  {
    period: "Apr 2017 — Apr 2018",
    location: "Jakarta",
    role: "Chief of IT",
    company: "Visi Jurusan",
    bullets: [
      "Developed and maintained the company's internal software such as mailing system, file storage system, and employee ledger using Clojure, React.js and PostgreSQL.",
      "Built, maintained, and maximized the SEO of the company marketing website using Clojure, React.js and PostgreSQL, resulting in a 300% increase in user count.",
    ],
  },
  {
    period: "Apr 2016 — Mar 2022",
    location: "Indonesia",
    role: "IT Specialist (Part-time)",
    company: "Zenius Center",
    bullets: [
      "Built and maintained score-testing web/mobile applications using Clojure, Go, MySQL, React Native, and AWS, which became the main products of the company.",
      "Built a psycho-test (psychological testing) application using React.js, Next.js, Node.js, MySQL to help students practice for exams.",
      "Maintained the deployment of multiple software using AWS.",
    ],
  },
  {
    period: "Feb 2013 — Jun 2016",
    location: "Jakarta",
    role: "Frontend Web Developer",
    company: "PT Zenius Education",
    bullets: [
      "Developed an entirely new company website from scratch using basic HTML and CSS, and templating languages such as Middleman and Bootstrap.",
    ],
  },
];
