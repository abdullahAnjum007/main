import { algorithms, devnotes, oscs } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "I8IS",
    date: "2024 - Present",
    details: [
      "Developed and launched numerous e-commerce and mobile applications, enhancing business operations and user engagement.",
      "Engineered full-stack solutions using MongoDB, Express.js, React, and Node.js, delivering scalable and efficient applications.",
      "Optimized back-end services, resulting in a 40% increase in application speed and a significant reduction in server costs.",
      "Collaborated with cross-functional teams to implement robust front-end interfaces and back-end APIs.",
      "Led the development of key features, improving app functionality and boosting client satisfaction ratings.",
    ],
  },
  {
    title: "React Native Developer Intern",
    company_name: "HNH Tech and Solution",
    date: "2023 - 2024",
    details: [
      "Quickly mastered React Native, developing 5 mobile apps within a short timeframe during the internship.",
      "Contributed to the development of highly responsive mobile applications, accelerating project timelines by 30%.",
      "Implemented new features and fixed critical bugs, enhancing user experience and app stability.",
      "Collaborated closely with senior developers to learn best practices and optimize app performance.",
      "Delivered high-quality code, improving app functionality and driving significant increases in user engagement.",
    ],
  },
  {
    title: "Tech QC Editor",
    company_name: "EPLANET",
    date: "2021 - 2022",
    details: [
      "Ensured the quality of subtitles by following guidelines specific to platforms like Netflix and Disney.",
      "Checked subtitle consistency against audio and video to maintain high standards.",
      "Reviewed and adjusted subtitle positioning, syncing, and duration for accuracy.",
      "Verified compliance with industry standards and client-specific requirements.",
      "Performed quality checks to ensure subtitles met linguistic and technical specifications.",
    ],
  },
  // {
  //   title: "Computer Science",
  //   company_name: "ODU",
  //   date: "2015 - 2018",
  //   details: [
  //     "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
  //     "Worked and interned at <span style='color: white;'>NASA and Norfolk Southern Railway</span> to gain practical experience in the field of data analysis.",
  //     "Acted as a member of the <span style='color: white;'>Association for Computing Machinery</span> (ACM).",
  //   ],
  // },
];

const portfolio = [
  {
    name: "Open Source Computer Science Repo",
    description:
      "A GitHub repo with over 17,000 stars containing a curated list of free online courses from reputable universities that satisfy undergraduate computer science requirements.",
    image: oscs,
  },
  {
    name: "Dev Notes",
    description:
      "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry, with a sister platform in progress.",
    image: devnotes,
  },
  {
    name: "Visually Understanding Algorithms",
    description:
      "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
    image: algorithms,
  },
];

export { experiences, portfolio };
