import type { Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Kartik Gade',
  title: 'Full Stack Developer',
  bio: 'Enthusiastic Full Stack Developer with hands-on experience in Python and SQL. Adept at building responsive web applications and writing clean, maintainable code. Passionate about solving real-world problems through technology and continuous learning.',
  about: "Hello! I'm Kartik, a passionate Full Stack Developer. My journey into technology is driven by a desire to solve real-world problems and a commitment to continuous learning. I specialize in Python and SQL, and I'm adept at building responsive web applications with clean, maintainable code. My key strengths include adaptability, attention to detail, and a strong collaborative spirit. I'm always eager to take on new challenges and expand my skill set.",
  email: 'kartikgade1109@gmail.com',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/kartikgade1109',
  linkedin: 'https://www.linkedin.com/in/kartik-gade',
};

export const SKILLS: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python' },
      { name: 'C++' },
      { name: 'C' },
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Web & Databases',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'PHP' },
      { name: 'PostgreSQL' },
      { name: 'NoSQL' },
    ],
  },
  {
    title: 'Tools & Other',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'PCB Designing' },
      { name: 'Excel (Data Analysis)' },
      { name: 'Tkinter' },
      { name: 'Pillow' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'PictoSecure – Image Steganography Tool',
    description: 'Developed a GUI-based steganography application to securely hide encrypted text inside images using the LSB technique and AES encryption, ensuring safe data transmission.',
    tags: ['Python', 'Tkinter', 'Pillow', 'Cryptography'],
    imageUrl: 'https://picsum.photos/seed/steganography/400/300',
    githubUrl: 'https://github.com/kartikgade1109',
  },
  {
    title: 'Drone Delivery System',
    description: 'Created concept-based documentation and developed an autonomous drone delivery system using GPS for real-time tracking and optimized route planning, with safety features for obstacle detection and low-battery management.',
    tags: ['Python', 'GPS', 'System Design', 'Algorithms'],
    imageUrl: 'https://picsum.photos/seed/drone/400/300',
  },
  {
    title: 'COVID-19 Vaccination Statistics Analysis',
    description: 'Analysed COVID-19 vaccination data using Excel to identify trends and patterns. Created interactive charts and tables to visualise vaccination progress across regions of India.',
    tags: ['Microsoft Excel', 'Data Analysis', 'Data Visualization'],
    imageUrl: 'https://picsum.photos/seed/analysis/400/300',
  },
];