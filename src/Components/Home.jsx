import { useEffect, useState } from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";
import image from "../images/portfolio-background.png";
import cvFile from "../images/CV_HuynhThanhBaoNgoc.pdf";

const Home = ({ name, title }) => {
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    let currentLength = 0;
    const typingTimer = setInterval(() => {
      currentLength += 1;
      setTypedTitle(title.slice(0, currentLength));

      if (currentLength === title.length) {
        clearInterval(typingTimer);
      }
    }, 80);

    return () => clearInterval(typingTimer);
  }, [title]);

  return (
    <section id="home" className="hero-section">
      <img className="hero-background" src={image} alt="" />
      <div className="hero-overlay" />
      <div className="content-container hero-content">
        {/* <p className="eyebrow">DATA · AI · WEB DEVELOPMENT</p> */}
        <h1>{name}</h1>
        <p className="hero-title" aria-label={title}>
          {typedTitle.split("").map((character, index) => (
            <motion.span
              key={`${character}-${index}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              {character === " " ? "\u00a0" : character}
            </motion.span>
          ))}
          <span className="typing-cursor" aria-hidden="true">
            |
          </span>
        </p>
        <p className="hero-description">
            I turn data into actionable insights, leverage AI to solve complex problems, and build intuitive web applications that bring intelligent solutions to life.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#portfolio">
            View projects
          </a>
          <a className="button button-secondary" href="#footer">
            Contact me
          </a>
          <a
            className="button button-secondary"
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
