interface SkillsType {
  id: number;
  imageUrl: string;
  title: string;
}

interface ExperiencesType {
  id: number;
  platformLogo: string;
  role: string;
  from: string;
  to: string;
  tasks: string[];
}

interface WorkType {
  id: number;
  projectImage: string;
  name: string;
  desc: string;
  techStacks: string[];
}
