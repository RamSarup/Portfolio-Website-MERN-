const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <span>RSM.dev</span>
      </div>

      <ul className="navbar-options">
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
        <li className="resume-btn">Resume</li>
      </ul>
    </nav>
  );
};

export default Navbar;
