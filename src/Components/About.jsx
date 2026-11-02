const skills = {
  "Data & AI": [
    ["Python", "python"],
    ["NumPy", "numpy"],
    ["Pandas", "pandas"],
    ["TensorFlow", "tensorflow"],
    ["ScikitLearn", "scikitlearn"],
    ["PyTorch", "pytorch"],
    ["Hugging Face", "huggingface"],
    ["Data Visualization", "chartjs"],
    ["SQL", "sql"],
    ["PostgreSQL", "postgres"],
    ["MongoDB", "mongodb"],
  ],
  Web: [
    ["JavaScript", "js"],
    ["HTML/CSS", "html"],
    ["React", "react"],
    ["TypeScript", "typescript"],
    ["Tailwind CSS", "tailwindcss"],
    ["FastAPI", "fastapi"],
  ],
  Tools: [
    ["Docker", "docker"],
    ["Git", "git"],
    ["GitHub", "github"],
    ["Linux", "linux"],
    ["VS Code", "vscode"],
  ],
};

const customIcons = {
  numpy:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  huggingface:
    "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  sql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
};

const iconUrl = (name) => {
  if (customIcons[name]) {
    return customIcons[name];
  }

  if (["pandas", "chartjs"].includes(name)) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;
  }

  return `https://skillicons.dev/icons?i=${name}`;
};

const skillRows = [skills["Data & AI"], skills.Web, skills.Tools];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="content-container">
        <div className="about-heading">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>A little about me.</h2>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-group education-group">
            <div className="timeline-label">
              <h3>Education</h3>
            </div>
            <div className="timeline-entry">
              <p className="timeline-date">Oct 2022 — Oct 2026</p>
              <div className="timeline-content">
                <strong>Bachelor of Computer Science</strong>
                <p className="timeline-school">Ton Duc Thang University</p>
              </div>
              
              
            </div>
            

          </div>
          <div className="timeline-group">
            <div className="timeline-label">
              <h3>Experience</h3>
            </div>
            <div className="timeline-entry">
              <p className="timeline-date">Feb 2026 — Apr 2026</p>
              <div className="timeline-content">
                <strong>Full-stack Developer Intern</strong>
                <p className="timeline-school">Department of Science and Technology</p>
                <ul className="timeline-list">
                  <li>
                    Researched and developed a RAG-based AI chatbot for
                    administrative document processing.
                  </li>
                  <li>
                    Designed user and admin interfaces for chatting, uploading,
                    and managing documents.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="skills-section">
          <div className="skills-section-heading">
            <p className="eyebrow">TECH SKILLS</p>
          </div>
          <div className="skills-marquee" aria-label="Skills">
            {skillRows.map((row, rowIndex) => {
              const repeatedRow = [...row, ...row];

              return (
                <div
                  className={`skill-row ${
                    rowIndex % 2 ? "skill-row-reverse" : ""
                  }`}
                  key={rowIndex}
                >
                  <div className="skill-track">
                    {repeatedRow.map(([name, icon], itemIndex) => (
                      <span className="skill-pill" key={`${name}-${itemIndex}`}>
                        <img
                          src={iconUrl(icon)}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                        />
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
