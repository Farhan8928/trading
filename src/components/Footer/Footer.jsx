  import React from "react";
  import "./Footer.css";
  import Wave from "../../img/wave.png";

  const Footer = () => {
    return (
      <div className="footer">
        <img src={Wave} alt="" style={{ width: "100%" }} />
        <div className="f-content">
          <span>experts.research01@gmail.com</span>
          <div
            className="f-address"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span>Office Address : </span>
            <span>
              4th Floor, Banarsi Heritage Office, 405-406, Malad, Mindspace, Malad
              West, Mumbai, Maharashtra 400064
            </span>
          </div>
          {/* <div className="f-icons">
            <Insta color="white" size={"3rem"} />
            <Facebook color="white" size={"3rem"} />
            <Gitub color="white" size={"3rem"} />
          </div> */}
        </div>
      </div>
    );
  };

  export default Footer;
