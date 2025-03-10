import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum is simply dummy text of printing. It is used in areas
          where random text is needed.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right Side - Cards */}
      <div className="cards">
        {/* Basic Plan */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Basic Plan"}
            detail={"Daily Intraday Tips | Entry & Exit Signals | Market Updates"}
          />
        </motion.div>

        {/* Pro Plan */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Pro Plan"}
            detail={"Nifty & Bank Nifty Options Trading | Swing Trades | Risk Management"}
          />
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Premium Plan"}
            detail={"Portfolio Management | Exclusive Market Insights | One-on-One Coaching"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
