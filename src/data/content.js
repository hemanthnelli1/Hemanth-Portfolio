export const profile = {
  name: "Nelli Hemanth",
  role: "Software Engineer · Systems Builder",
  location: "Visakhapatnam, India",
  email: "hemanthnelli1@gmail.com",
  phone: "+91 78423 73318",
  resume: "/resume.pdf",
  linkedin: "https://linkedin.com/in/hemanthnelli",
  github: "https://github.com/hemanthnelli1",
  status: "Available 2027",
  tagline:
    "Full-stack developer with hands-on experience in software development, distributed systems, and applied machine learning — building scalable, high-performance applications and solving real-world problems through clean, efficient code.",
};

export const about = {
  heading: "Crafting code that scales & performs.",
  body: [
    "I'm a B.Tech Computer Science student at Vignan Institute of Information Technology, Visakhapatnam, with hands-on experience in software development, distributed systems, and applied machine learning.",
    "I've built and deployed multiple real-world projects on a strong foundation of Data Structures & Algorithms, OOP, DBMS, and Computer Networks — and I'm passionate about building scalable, high-performance applications.",
  ],
  education: {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Vignan Institute of Information Technology, Visakhapatnam",
    period: "Expected 2027 · CGPA 8.04 / 10",
  },
  stats: [
    { value: "8.04", label: "CGPA / 10" },
    { value: "2", label: "Internships" },
    { value: "L3", label: "HackWithInfy" },
    { value: "3+", label: "Live Projects" },
    { value: "4", label: "Certifications" },
  ],
};

export const skills = [
  {
    icon: "zap",
    title: "Languages",
    subtitle: "Core Programming",
    items: ["Python", "JavaScript"],
    span: "md:col-span-2",
  },
  {
    icon: "palette",
    title: "Frontend",
    subtitle: "Web Technologies",
    items: ["React", "HTML", "CSS", "Bootstrap"],
    span: "md:col-span-1",
  },
  {
    icon: "server",
    title: "Backend",
    subtitle: "Server & Database",
    items: ["Node.js", "Flask", "FastAPI", "MySQL", "SQLite"],
    span: "md:col-span-1",
  },
  {
    icon: "brain",
    title: "Algorithms & ML",
    subtitle: "DSA & Machine Learning",
    items: ["Sliding Window", "Segment Trees", "Dynamic Programming", "Graph Algorithms", "Greedy", "Scikit-learn"],
    span: "md:col-span-2",
  },
  {
    icon: "shield",
    title: "Security",
    subtitle: "Cyber Security",
    items: ["Wireshark", "Nmap", "Ethical Hacking"],
    span: "md:col-span-1",
  },
  {
    icon: "wrench",
    title: "Tools",
    subtitle: "Dev Environment",
    items: ["Git", "GitHub"],
    span: "md:col-span-1",
  },
];

export const experience = [
  {
    date: "Jun 2026 — Jul 2026",
    location: "Remote",
    company: "XTRAGRAD Technologies",
    title: "AI Intern",
    points: [
      "Led development of TrueLensX, a full-stack AI Image Forensics platform (TensorFlow, Flask, React) for detecting real vs. AI-generated images using deep learning.",
      "Built Student Performance Prediction, a Scikit-learn web app predicting exam scores through a publicly deployed interactive interface.",
      "Shipped ML applications end-to-end — data preprocessing, model training, REST APIs, frontend development, and cloud deployment.",
    ],
  },
  {
    date: "Dec 2023 — May 2024",
    location: "Visakhapatnam",
    company: "PixelWind Technologies",
    title: "Full Stack Developer Intern",
    points: [
      "Shipped responsive frontend components for a full-stack e-commerce application as part of a 6-member team, hitting every feature deadline.",
      "Engineered server-side logic for authentication and core workflows, and resolved recurring UI bugs across the product.",
      "Contributed to a production-ready launch, integrating frontend, backend, and database components end-to-end over 6 months.",
    ],
  },
];

export const achievements = [
  {
    tag: "I",
    title: "HackWithInfy — Shortlisted, Level 3",
    body: "Advanced to Level 3 of Infosys's national coding competition.",
  },
  {
    tag: "II",
    title: "Smart India Hackathon 2022",
    body: "Selected to present engineering solutions at SIH 2022, one of India's largest national-level hackathons, among thousands of participants.",
  },
  {
    tag: "III",
    title: "Smart India Hackathon 2023",
    body: "Back-to-back SIH selection in 2023, presenting solutions on the national stage for the second year running.",
  },
];

export const certifications = [
  { icon: "cloud", title: "OCI AI Foundations Associate", org: "Oracle" },
  { icon: "flask", title: "Cloud Computing", org: "NPTEL" },
  { icon: "shield", title: "Ethical Hacking", org: "EduSkills" },
  { icon: "monitor", title: "Full Stack Internship Certification", org: "PixelWind Technologies" },
];

export const projects = [
  {
    index: "01",
    title: "Distributed Cache Simulator with LRU Eviction",
    description:
      "Python/FastAPI simulator for 3 distributed cache nodes using consistent hashing for request routing and configurable LRU eviction, with real-time monitoring of hit/miss counts, hit ratio, and per-node utilization.",
    tags: ["Python", "FastAPI", "LRU Eviction", "Consistent Hashing", "Distributed Systems"],
    link: "https://distributed-cache-simulator.vercel.app/",
    status: "live",
  },
  {
    index: "02",
    title: "TrueLensX — AI Image Forensics Platform",
    description:
      "Full-stack AI image forensics platform (TensorFlow, Flask, React) for detecting real vs. AI-generated images, with explainable AI and forensic analysis.",
    tags: ["TensorFlow", "Flask", "React", "Deep Learning", "Explainable AI"],
    link: "https://truelensx.vercel.app/",
    status: "live",
  },
  {
    index: "03",
    title: "Resume Intelligence Platform",
    description:
      "AI-powered resume analyzer (Flask, Gemini AI) performing ATS scoring and skill extraction in under 2 seconds on standard PDF resumes, validated across 10 resumes with different layouts.",
    tags: ["Flask", "Gemini AI", "ATS Scoring", "NLP"],
    link: "https://resume-intelligence-platform.onrender.com/",
    status: "live",
  },
];
