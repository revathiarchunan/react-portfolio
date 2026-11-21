import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Nexora Digital",
      category: "Landing Page",
      description:
        "A modern and responsive digital agency website built with clean layouts, smooth animations and a professional UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/revathiarchunan/landing-page-project",
      demo: "https://revathiarchunan.github.io/landing-page-project/",
    },
    {
      id: 2,
      title: "UAE Job Tracker",
      category: "Web Application",
      description:
        "A job tracking application designed to organize job applications, track progress and manage job search activities.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/revathiarchunan/uae-job-tracker",
      demo: "https://musical-kelpie-f7b985.netlify.app/",
    },
    {
      id: 3,
      title: "React Portfolio",
      category: "Portfolio Website",
      description:
        "My personal developer portfolio built with React components, responsive layouts and modern frontend features.",
      tech: ["React", "Vite", "CSS"],
      github: "https://github.com/revathiarchunan/react-portfolio",
      demo: "#",
    },
  ]);

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <span className="section-label">MY WORK</span>
        <h2>Featured <span>Projects</span></h2>
        <p>Some things I've built recently</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-top">
              <span className="project-category">{project.category}</span>
              <span className="project-number">
                0{project.id}
              </span>
            </div>

            <h3>{project.title}</h3>
            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;