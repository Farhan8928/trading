import React, { useContext } from "react";
import "./Works.css";
import bankNifty from "../../img/bankNiftys.png";
import sensex from "../../img/sensexs.png";
import BSE from "../../img/bse.png";
import nifty50 from "../../img/nifty50s.png";
import finnifty from "../../img/finnifty.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      <Helmet>
        <title>Why Choose Us - Experts Research</title>
        <meta
          name="description"
          content="Discover why Experts Research is your trusted partner for stock market success with expert trading strategies and insights for Nifty, Bank Nifty, BSE, and more."
        />
        <meta
          name="keywords"
          content="why choose Experts Research, stock market advisory, trading strategies, Nifty 50, Bank Nifty, BSE, SEBI registered"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Why Choose Us - Experts Research" />
        <meta
          property="og:description"
          content="Top-tier market analysis and proven trading strategies to maximize your profits with Experts Research."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://expertsresearch.com/#works" />
        <meta
          property="og:image"
          content="https://expertsresearch.com/images/works-image.jpg"
        />
        <link rel="canonical" href="https://expertsresearch.com/#works" />
      </Helmet>

      {/* Left Side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Why Choose Us?</span>
          <span>Expert Trading Strategies & Insights</span>
          <span>
            We provide top-tier market analysis, proven trading strategies, and
            <br />
            expert guidance to help traders maximize their profits.
            <br />
            Our experience with financial markets ensures your trading success.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Start Trading</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img
              src={bankNifty}
              alt="Bank Nifty"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
          <div className="w-secCircle">
            <img
              src={nifty50}
              alt="Nifty 50"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
          <div className="w-secCircle">
            <img
              src={BSE}
              alt="BSE"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
          <div className="w-secCircle">
            <img
              src={finnifty}
              alt="FinNifty"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
          <div className="w-secCircle">
            <img src={sensex} alt="Sensex" />
          </div>
        </motion.div>

        {/* Background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;