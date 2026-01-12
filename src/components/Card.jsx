const Card = ({ name, details, accent }) => {
  return (
    <div className="card" style={{"--accent":accent}}>
      <h3 className="card-title"> {name} </h3>
      <p className="card-desc">
        {details}
      </p>
      <div className="card-links">
        <a href="#">Live</a>
        <a href="#">GitHub</a>
      </div>
    </div>
  );
};

export default Card;