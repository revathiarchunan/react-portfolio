const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Netlify"],
  },
  {
    title: "Currently Learning",
    skills: ["Advanced React", "Node.js", "REST APIs"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <span className="section-label">MY TOOLKIT</span>
        <h2>Skills & <span>Technologies</span></h2>
        <p>Technologies I use and continue to learn</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              {["⌘", "</>", "↗"][index]}
            </div>

            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;