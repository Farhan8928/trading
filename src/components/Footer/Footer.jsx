import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>experts.research01@gmail.com</span>
        <div className="f-address">
          <span>Office Address: </span>
          <span>
            3th Floor, Banarsi Heritage Office, 305-306,
            Mindspace, Malad West, Mumbai, Maharashtra 400064
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;