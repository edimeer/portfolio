// Newest first. `branch` is the label shown in the git log style timeline.

export const EXPERIENCE = [
  {
    company: "Accenture",
    branch: "accenture",
    role: "Software Engineer",
    period: "Nov 2025 - present",
    current: true,
    summary:
      "Multi-tenant student platform for education and training providers.",
    highlights: [
      "Work across the stack on the platform's Rails app, backed by MySQL and Redis.",
      "Tracked down and fixed production issues, like database deadlocks and validation errors that blocked users.",
      "Fixed bugs in core modules that caused data loss, duplicate records, and forms that wiped what users had typed after a failed validation.",
      "Documented database fields as part of a team-wide effort to document the schema.",
      "Triage issues with QA and support, review code, and use Claude Code daily to debug and ship faster.",
    ],
    stack: ["Ruby on Rails", "MySQL", "Redis", "Claude Code"],
  },
  {
    company: "Cloudstaff",
    branch: "cloudstaff",
    role: "Software Engineer",
    period: "Nov 2024 - Nov 2025",
    summary:
      "Property management SaaS for managers, owners and tenants in Australia.",
    highlights: [
      "Worked on the core Rails backend and designed the REST APIs behind features for each user group.",
      "Built dashboard and workflow screens in React and Tailwind CSS.",
      "Sped up slow pages by fixing queries, moving heavy work into background jobs, and adding caching.",
      "Wrote RSpec tests to catch regressions before release, and worked with product managers to scope features and ship on schedule.",
    ],
    stack: ["Ruby on Rails", "React", "Tailwind CSS", "RSpec"],
  },
  {
    company: "YouSource",
    branch: "yousource",
    role: "Software Engineer",
    period: "Mar 2019 - Mar 2024",
    summary:
      "Microservice-based medical pre-employment screening system.",
    highlights: [
      "Built services in Ruby on Rails with an Angular front end.",
      "Designed REST APIs for data exchange between services and client systems.",
      "Wrote RSpec tests with each feature and maintained the CircleCI pipelines for tests and deploys.",
      "Tuned PostgreSQL queries that were slowing the system down.",
      "Reviewed code for the team and mentored junior developers and interns on Agile practices.",
    ],
    stack: ["Ruby on Rails", "Angular", "TypeScript", "PostgreSQL", "RSpec", "CircleCI"],
  },
];
