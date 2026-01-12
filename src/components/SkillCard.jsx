const SkillCard = ({ name, icon, details, accent }) => {
  return (
    <div className="skill_card" style={{ "--accent": accent }}>
      <div className="skill_img">
        <img src={icon} alt={name} />
      </div>

      <div className="skill_details">
        <h3>{name}</h3>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default SkillCard;
