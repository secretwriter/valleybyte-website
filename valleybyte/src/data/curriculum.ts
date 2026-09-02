export interface CurriculumWeek {
  week: number;
  title: string;
  topics: string[];
}

export const qaCurriculum: CurriculumWeek[] = [
  {
    week: 1,
    title: "Testing Fundamentals",
    topics: ["Requirements Analysis", "Test Planning", "Test Case Design"],
  },
  {
    week: 2,
    title: "Manual Testing",
    topics: ["Functional Testing", "Regression Testing", "Bug Hunting", "Bug Reporting"],
  },
  {
    week: 3,
    title: "API & Database Testing",
    topics: ["API Testing", "Postman", "SQL Testing", "Test Data Validation"],
  },
  {
    week: 4,
    title: "Automation",
    topics: ["Selenium", "Python", "Test Automation", "Final QA Report", "Final Assessment"],
  },
];
