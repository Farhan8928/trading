import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <Helmet>
        <title>Master Nifty & Bank Nifty - Experts Research</title>
        <meta
          name="description"
          content="Learn to maximize profits in Nifty & Bank Nifty derivatives with SEBI-registered expert investment advisory."
        />
        <meta
          name="keywords"
          content="Nifty trading, Bank Nifty derivatives, stock market advisory, SEBI registered analyst"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Master Nifty & Bank Nifty - Experts Research"
        />
        <meta
          property="og:description"
          content="Professional guidance for stock market success with strategic insights and risk management."
        />
        <meta property="og:url" content="https://expertsresearch.com/#Intro" />
        <meta
          property="og:image"
          content="https://expertsresearch.com/images/intro-image.jpg"
        />
        <link rel="canonical" href="https://expertsresearch.com/#Intro" />
      </Helmet>
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>
            Master Nifty & Bank Nifty Derivatives
          </span>
          <span>Expert Investment Advisory</span>
          <span>
            Learn how to maximize your profits with professional guidance from a
            SEBI-registered research analyst. Get strategic insights and risk
            management techniques for stock market success.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Get Free Demo</button>
        </Link>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector 1" />
        <img src={Vector2} alt="Vector 2" />
        <img src={boy} alt="Boy illustration" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="Glasses emoji"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Stock Market" text2="Expert" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="High Accuracy" text2="Advisory" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;