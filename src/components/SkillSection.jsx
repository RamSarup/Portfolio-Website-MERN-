import SkillCard from "./SkillCard";

const skills = [
  {
    name: "JavaScript",
    icon: "/JS.png",
    details: "ES6 • DOM • Async",
    accent: "rgba(250,204,21,0.35)",
  },
  {
    name: "C++",
    icon: "/C++.png",
    details: "OOP • STL • DSA",
    accent: "rgba(96,165,250,0.35)",
  },
  {
    name: "HTML",
    icon: "/HTML.png",
    details: "Semantic • SEO",
    accent: "rgba(249,115,22,0.35)",
  },
  {
    name: "CSS",
    icon: "/CSS.png",
    details: "Flex • Grid • Animations",
    accent: "rgba(56,189,248,0.35)",
  },
  {
    name: "React",
    icon: "/REACT.png",
    details: "Hooks • State • API",
    accent: "rgba(56,189,248,0.35)",
  },
  {
    name: "Node.js",
    icon: "/NODE.png",
    details: "REST • FS • Async",
    accent: "rgba(34,197,94,0.35)",
  },
  {
    name: "Express.js",
    icon: "/EXPRESS.png",
    details: "Routing • Middleware",
    accent: "rgba(148,163,184,0.35)",
  },
];

const SkillSection = () => {
  return (
    <div className="skill-card-container">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  );
};

export default SkillSection;
