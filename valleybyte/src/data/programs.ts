export interface ProgramSkill {
  name: string;
}

export interface Program {
  slug: string;
  name: string;
  shortName: string;
  status: "available" | "coming-soon";
  duration: string;
  mode: string;
  level: string;
  fee: string;
  description: string;
  skills: string[];
  outcomes: string[];
}

export const qaProgram: Program = {
  slug: "qa-software-testing",
  name: "QA & Software Testing Practical Internship",
  shortName: "QA & Software Testing",
  status: "available",
  duration: "4 Weeks",
  mode: "Remote",
  level: "Beginner → Intermediate",
  fee: "NPR 5,000",
  description:
    "A practical software testing program where participants test a real-world application, design test cases, identify bugs, perform API testing, practice automation, and produce professional QA documentation.",
  skills: [
    "Manual Testing",
    "Test Case Design",
    "Bug Reporting",
    "Functional Testing",
    "Regression Testing",
    "API Testing",
    "Postman",
    "SQL Testing",
    "Selenium",
    "Python",
    "Test Automation",
    "QA Documentation",
  ],
  outcomes: [
    "Practical project experience",
    "Test cases",
    "Bug reports",
    "API testing experience",
    "Automation experience",
    "QA documentation",
    "Mentor feedback",
    "Portfolio material",
    "Performance evaluation",
    "Verifiable certificate",
  ],
};

export const futurePrograms: Program[] = [
  {
    slug: "software-development",
    name: "Software Development",
    shortName: "Software Development",
    status: "coming-soon",
    duration: "",
    mode: "",
    level: "",
    fee: "",
    description: "Build and ship real applications using modern development practices.",
    skills: [],
    outcomes: [],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortName: "Cybersecurity",
    status: "coming-soon",
    duration: "",
    mode: "",
    level: "",
    fee: "",
    description: "Hands-on work defending systems and investigating real threats.",
    skills: [],
    outcomes: [],
  },
  {
    slug: "data-science",
    name: "Data Science",
    shortName: "Data Science",
    status: "coming-soon",
    duration: "",
    mode: "",
    level: "",
    fee: "",
    description: "Work with real datasets to build models and extract insight.",
    skills: [],
    outcomes: [],
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    shortName: "Artificial Intelligence",
    status: "coming-soon",
    duration: "",
    mode: "",
    level: "",
    fee: "",
    description: "Practical experience building and evaluating AI-driven systems.",
    skills: [],
    outcomes: [],
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    shortName: "Data Analytics",
    status: "coming-soon",
    duration: "",
    mode: "",
    level: "",
    fee: "",
    description: "Turn raw data into decisions through structured analysis projects.",
    skills: [],
    outcomes: [],
  },
  {
    slug: "cloud-computing",
    name: "Cloud Computing",
    shortName: "Cloud Computing",
    status: "coming-soon",
    duration: "",
    mode: "",
    level: "",
    fee: "",
    description: "Deploy, scale, and manage real infrastructure on the cloud.",
    skills: [],
    outcomes: [],
  },
];

export const allPrograms: Program[] = [qaProgram, ...futurePrograms];
