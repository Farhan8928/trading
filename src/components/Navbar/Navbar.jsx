import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <Helmet>
        <title>Navigation - Experts Research</title>
        <meta
          name="description"
          content="Navigate through Experts Research services: Home, All Services, Why Us, and Contact Us."
        />
        <meta
          name="keywords"
          content="Experts Research navigation, stock market advisory, SEBI registered"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Navigation - Experts Research" />
        <meta
          property="og:description"
          content="Explore our stock market advisory services through our navigation menu."
        />
        <meta property="og:url" content="https://expertsresearch.com/#Navbar" />
        <meta
          property="og:image"
          content="https://expertsresearch.com/images/navbar-image.jpg"
        />
        <link rel="canonical" href="https://expertsresearch.com/#Navbar" />
      </Helmet>
      <div className="n-left">
        <div className="n-name">Experts Research</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li style={{ textWrap: "noWrap" }}>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                style={{ whiteSpace: "nowrap" }}
              >
                All Services
              </Link>
            </li>
            <li>
              <Link
                to="works"
                style={{ whiteSpace: "nowrap" }}
                spy={true}
                smooth={true}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                style={{ whiteSpace: "nowrap" }}
                spy={true}
                smooth={true}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Get Free Demo</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;