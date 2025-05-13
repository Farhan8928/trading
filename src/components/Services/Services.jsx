import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring" };

  return (
    <div className="services" id="services">
      <Helmet>
        <title>Our Services - Experts Research</title>
        <meta
          name="description"
          content="Explore our expert trading services: Basic Plan, Pro Plan, and Premium Plan for Nifty & Bank Nifty trading and portfolio management."
        />
        <meta
          name="keywords"
          content="trading services, Nifty options, Bank Nifty trading, portfolio management, stock market plans"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Services - Experts Research" />
        <meta
          property="og:description"
          content="Unlock the best deals with our expert trading services tailored for stock market success."
        />
        <meta
          property="og:url"
          content="https://expertsresearch.com/#services"
        />
        <meta
          property="og:image"
          content="https://expertsresearch.com/images/services-image.jpg"
        />
        <link rel="canonical" href="https://expertsresearch.com/#services" />
      </Helmet>
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Our Awesome</span>
        <span>Services</span>
        <span>Unlock the Best Deals with Our Expert Trading Services!</span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Basic Plan"}
            detail={
              "Daily Intraday Tips | Entry & Exit Signals | Market Updates"
            }
            discountPrice={48500}
            actualPrice={55000}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Pro Plan"}
            detail={
              "Nifty & Bank Nifty Options Trading | Swing Trades | Risk Management"
            }
            discountPrice={75500}
            actualPrice={85000}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Premium Plan"}
            detail={
              "Portfolio Management | Exclusive Market Insights | One-on-One Coaching"
            }
            color="rgba(252, 166, 31, 0.45)"
            discountPrice={111000}
            actualPrice={130000}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
