import { useRef } from "react";

const certificates = [
  {
    issuer: "HackerRank",
    title: "SQL (Intermediate) Certificate",
    url: "https://www.hackerrank.com/certificates/ff141e929116",
  },
  {
    issuer: "MongoDB",
    title: "MongoDB Basics for Students",
    url: "https://learn.mongodb.com/c/8wKTiwy8Rs2BIJa2AH8YGQ",
  },
  {
    issuer: "Google",
    title: "Google Advanced Data Analytics Capstone",
    url: "https://www.coursera.org/account/accomplishments/verify/9WM8CVWM35UB",
  },
];

const Certificates = () => {
  const certificateListRef = useRef(null);

  const moveCertificates = (direction) => {
    certificateListRef.current?.scrollBy({
      behavior: "smooth",
      left: direction * certificateListRef.current.clientWidth,
    });
  };

  return (
    <section
      className="certificates-section"
      id="certificates"
      style={{
        "--certificate-background":
          "url(https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1800&q=85)",
      }}
    >
      <div className="content-container">
        <div className="certificates-heading">
          <div>
            <p className="eyebrow">CERTIFICATES</p>
            <h2>Certificates & milestones.</h2>
          </div>
          <p>
            A collection of courses, certifications, and milestones from my
            journey in technology.
          </p>
        </div>

        {certificates.length > 0 ? (
          <div className="certificate-carousel">
            <button
              className="certificate-arrow"
              type="button"
              aria-label="Previous certificates"
              onClick={() => moveCertificates(-1)}
            >
              ‹
            </button>
            <div className="certificate-viewport">
              <div className="certificate-grid" ref={certificateListRef}>
                {certificates.map((certificate, index) => (
                  <article className="certificate-card" key={certificate.title}>
                    <div className="certificate-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="certificate-issuer">{certificate.issuer}</p>
                      <h3>{certificate.title}</h3>
                      {certificate.url ? (
                        <a
                          href={certificate.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View credential <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span className="certificate-source">
                          English proficiency
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <button
              className="certificate-arrow"
              type="button"
              aria-label="Next certificates"
              onClick={() => moveCertificates(1)}
            >
              ›
            </button>
          </div>
        ) : (
          <div className="certificates-empty">
            <span className="certificate-mark" aria-hidden="true">+</span>
            <div>
              <h3>Certificates will appear here.</h3>
              <p>
                Verified credentials and completed learning milestones will be
                added as they come.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;