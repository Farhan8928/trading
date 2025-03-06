import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Maruti Research</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                All Services
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Why Us
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
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
