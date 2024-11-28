import { ROUTES } from "./Routes";

export const navLinks = [
  {
    _id: 1,
    title: "About",
    moveTo: ROUTES.ABOUT,
  },
  {
    _id: 2,
    title: "Work",
    moveTo: ROUTES.WORK,
  },
  {
    _id: 3,
    title: "Testimonials",
    moveTo: ROUTES.TESTIMONIALS,
  },
  {
    _id: 4,
    title: "Contact",
    moveTo: ROUTES.CONTACT,
  },
];

export const skillsList: SkillsType[] = [
  {
    id: 1,
    imageUrl: "/skills/js.svg",
    title: "JavaScript",
  },
  {
    id: 2,
    imageUrl: "/skills/typescript.svg",
    title: "TypeScript",
  },
  {
    id: 3,
    imageUrl: "/skills/react.svg",
    title: "React.js",
  },
  {
    id: 4,
    imageUrl: "/skills/nextjs.svg",
    title: "Next.js",
  },
  {
    id: 5,
    imageUrl: "/skills/nodejs.svg",
    title: "Node.js",
  },
  {
    id: 6,
    imageUrl: "/skills/express.svg",
    title: "Express",
  },
  {
    id: 7,
    imageUrl: "/skills/nest.svg",
    title: "Nest.js",
  },
  {
    id: 8,
    imageUrl: "/skills/socket.svg",
    title: "Socket.io",
  },
  {
    id: 9,
    imageUrl: "/skills/postgres.svg",
    title: "PostgreSQL",
  },
  {
    id: 10,
    imageUrl: "/skills/mongo.svg",
    title: "MongoDB",
  },
  {
    id: 11,
    imageUrl: "/skills/sass.svg",
    title: "Sass/SCSS",
  },
  {
    id: 12,
    imageUrl: "/skills/figma.svg",
    title: "Figma",
  },
  {
    id: 13,
    imageUrl: "/skills/cypress.svg",
    title: "Cypress",
  },
  {
    id: 14,
    imageUrl: "/skills/storybook.svg",
    title: "Storybook",
  },
  {
    id: 15,
    imageUrl: "/skills/git.svg",
    title: "Git",
  },
  {
    id: 16,
    imageUrl: "/skills/fullstack.svg", // Make sure to replace this with the actual icon path
    title: "Full Stack Developer",
  },
  {
    id: 17,
    imageUrl: "/skills/projectmanagement.svg", // Make sure to replace this with the actual icon path
    title: "Project Management Specialist",
  },
  {
    id: 18,
    imageUrl: "/skills/photojournalism.svg", // Make sure to replace this with the actual icon path
    title: "Photojournalism",
  },
  {
    id: 19,
    imageUrl: "/skills/videography.svg", // Make sure to replace this with the actual icon path
    title: "Videography",
  },
];

export const experiences: ExperiencesType[] = [
  {
    id: 1,
    platformLogo: "/icons/upwork.svg",
    role: "Sr. Frontend Developer",
    tasks: [
      "Developed and maintained web applications using React, Next.js, and other modern technologies.",
      "Collaborated with designers, product managers, and backend developers to deliver high-quality, user-friendly applications.",
      "Implemented responsive and accessible designs ensuring cross-platform compatibility.",
      "Optimized web applications for speed, scalability, and improved user experience using performance tools and techniques.",
      "Integrated APIs and services for seamless user interaction.",
    ],
    from: "Nov 2021",
    to: "Present",
  },
  {
    id: 2,
    platformLogo: "/icons/upwork.svg",
    role: "Team Lead",
    tasks: [
      "Led a team of frontend and full-stack developers, ensuring best coding practices and efficient workflows.",
      "Managed code reviews, sprint planning, and release cycles for multiple projects.",
      "Mentored junior developers and facilitated knowledge sharing sessions.",
      "Collaborated with stakeholders to align development with business requirements and user needs.",
      "Assured quality assurance standards and testing were met for all product releases.",
    ],
    from: "Jul 2017",
    to: "Oct 2021",
  },
  {
    id: 3,
    platformLogo: "/icons/upwork.svg",
    role: "Full Stack Developer",
    tasks: [
      "Designed and developed full-stack applications using Node.js, React, PostgreSQL, and other related technologies.",
      "Implemented RESTful APIs, connecting backend systems to frontend interfaces.",
      "Handled both frontend UI components and backend services, ensuring smooth data flow and performance.",
      "Collaborated with cross-functional teams to meet customer requirements and resolve complex technical challenges.",
      "Ensured security, scalability, and high availability for all developed applications.",
    ],
    from: "Dec 2015",
    to: "May 2017",
  },
  {
    id: 4,
    platformLogo: "/icons/upwork.svg",
    role: "Project Management Specialist",
    tasks: [
      "Managed multiple software development and infrastructure projects from initiation to completion.",
      "Coordinated with cross-functional teams (engineering, marketing, and product) to ensure on-time and on-budget delivery.",
      "Monitored project performance, identified risks, and took corrective actions to resolve issues.",
      "Managed project timelines, resources, and deliverables using project management tools like Jira and Trello.",
      "Led client meetings to provide updates and gather feedback, ensuring client satisfaction and project success.",
    ],
    from: "Jun 2014",
    to: "Nov 2015",
  },
  {
    id: 5,
    platformLogo: "/icons/upwork.svg",
    role: "Photojournalist",
    tasks: [
      "Captured high-quality photos of events, people, and landscapes for local publications.",
      "Collaborated with editors to ensure photos were aligned with editorial standards and visual storytelling.",
      "Worked in high-pressure environments, ensuring timely delivery of images for breaking news and feature stories.",
      "Managed photo archives and maintained digital photography equipment.",
      "Created compelling visual content that communicated powerful stories and messages to a wide audience.",
    ],
    from: "Jan 2012",
    to: "May 2014",
  },
  {
    id: 6,
    platformLogo: "/icons/upwork.svg",
    role: "Videographer",
    tasks: [
      "Produced, filmed, and edited video content for corporate clients, local businesses, and events.",
      "Worked with directors and clients to develop video concepts, scripts, and storyboards.",
      "Handled all aspects of video production, including lighting, sound, camera operation, and editing.",
      "Developed promotional and social media content to engage and grow brand presence.",
      "Produced video documentaries, advertisements, and event coverage for television and online platforms.",
    ],
    from: "Mar 2010",
    to: "Dec 2011",
  },
];


export const work: WorkType[] = [
  {
    id: 1,
    name: "Fiskil",
    desc: "A comprehensive platform designed to enhance your experience. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    techStacks: [
      "React",
      "Next.js",
      "TypeScript",
      "Git",
      "Tailwind CSS",
      "Figma",
      "Cypress",
      "Nest.js",
      "Storybook",
      "PostgreSQL",
    ],
    projectImage: "/projects/fiskil.svg",
  },
];

export const testimonialsMessages = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder - xyz.com",
    icon: "/icons/user.svg",
    quote: "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for frontend development.",
  },
  {
    id: 2,
    name: "Make Deen",
    role: "Founder - abc.com",
    icon: "/icons/user.svg",
    quote: "Great guy, highly recommended for any COMPLEX frontend development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    id: 3,
    name: "Fatima Soucu",
    role: "Founder - abc.com",
    icon: "/icons/user.svg",
    quote: "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
