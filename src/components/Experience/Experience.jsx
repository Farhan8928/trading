import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { Helmet } from "react-helmet";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <Helmet>
        <title>Our Experience - Experts Research</title>
        <meta
          name="description"
          content="With over 14 years of experience, 32+ completed projects, and 18+ companies served, trust Experts Research for stock market success."
        />
        <meta
          name="keywords"
          content="stock market experience, trading expertise, SEBI registered analyst"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Experience - Experts Research" />
        <meta
          property="og:description"
          content="Proven expertise in stock market advisory with over a decade of experience."
        />
        <meta
          property="og:url"
          content="https://expertsresearch.com/#experience"
        />
        <meta
          property="og:image"
          content="https://expertsresearch.com/images/experience-image.jpg"
        />
        <link rel="canonical" href="https://expertsresearch.com/#experience" />
      </Helmet>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          14+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          32+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          18+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;