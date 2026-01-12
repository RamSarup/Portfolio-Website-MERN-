import Card from './Card'

const projects = [
  {
    name: "Weather App",
    details: "API • Async • UI",
    accent: "rgba(250,204,21,0.35)",
  },
  {
    name: "To-Do App",
    details: "CRUD • State",
    accent: "rgba(96,165,250,0.35)",
  },
  {
    name: "Portfolio",
    details: "React • CSS • Animations",
    accent: "rgba(249,115,22,0.35)",
  },
];

const CardSection = () => {
  return (
    <div className="cardContainer">
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
};

export default CardSection;
