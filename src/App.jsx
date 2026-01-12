import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CardSection from "./components/CardSection";
import SkillSection from "./components/SkillSection";
import "./styling/navbar.css";
import "./styling/hero_section.css";
import "./styling/cardSection.css";
import "./styling/card.css";
import "./styling/skill.css";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <h1 id="project">Projects</h1>
      <CardSection />
      <p className="skill">SKILLS</p>
      <div className="skill-collection">
        <SkillSection />
        <SkillSection />
      </div>
    </>
  );
};

export default App;
