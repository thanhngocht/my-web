import { useState } from "react";

const projectList = [
  {
    title: "Northwind Sales Analytics",
    subtitle: "AI Agent + BI + Chatbot",
    date: "Mar 2026",
    description:
      "Power BI sales dashboards, customer segmentation, and an n8n chatbot for natural-language SQL.",
    technologies: "Python, Postgres, Power BI, n8n",
    url: "https://github.com/thanhngocht/Northwind-Sales-Analytics/tree/main",
  },
  {
    title: "Administrative Document Retrieval Chatbot",
    subtitle: "RAG-based",
    date: "Feb – Mar 2026",
    description:
      "RAG chatbot for document search with React, FastAPI, Milvus, OCR, and a local LLM.",
    technologies: "Python, React, FastAPI, Milvus, Ollama",
    url: "https://github.com/thanhngocht/RAG-based-Document-Assistant",
  },
  {
    title: "Vietnamese News Classification",
    date: "June 2026",
    description:
      "Vietnamese news classifier using TF-IDF + SVM and PhoBERT, achieving 92.59% Accuracy.",
    technologies: "Python, Pandas, PyTorch, PhoBERT, NLP",
    url: "https://github.com/thanhngocht/Vietnamese-News-Classification",
  },
];

const Portfolio = () => {
  const projectsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projectList.length / projectsPerPage);
  const firstProjectIndex = (currentPage - 1) * projectsPerPage;
  const visibleProjects = projectList.slice(
    firstProjectIndex,
    firstProjectIndex + projectsPerPage
  );

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">Projects</h2>
      <p className="portfolio-subtitle">A few things I have built and contributed to.</p>
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span className="project-number">
                {String(firstProjectIndex + index + 1).padStart(2, "0")}
              </span>
              <span>{project.date}</span>
            </div>
            <h2>{project.title}</h2>
            {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
            <p>{project.description}</p>
            <p className="project-technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            {project.url ? (
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View source ↗
              </a>
            ) : (
              <span className="project-source">Source: Git</span>
            )}
          </article>
        ))}
      </div>
      <nav className="portfolio-pagination" aria-label="Portfolio pages">
        <button
          className="portfolio-pagination-arrow"
          type="button"
          aria-label="Previous portfolio page"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((page) => page - 1)}
        >
          <span className="pagination-arrow-icon" aria-hidden="true">‹</span>
        </button>
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              className={`portfolio-pagination-number ${
                currentPage === page ? "active" : ""
              }`}
              type="button"
              aria-label={`View portfolio page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}
            </button>
          );
        })}
        <button
          className="portfolio-pagination-arrow"
          type="button"
          aria-label="Next portfolio page"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((page) => page + 1)}
        >
          <span className="pagination-arrow-icon" aria-hidden="true">›</span>
        </button>
      </nav>
    </section>
  );
};

export default Portfolio;
