import React from "react";

import "./FloatingDiv.css";

const FloatinDiv = ({ img, text1, text2 }) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span style={{ whiteSpace: "noWrap" }}>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
