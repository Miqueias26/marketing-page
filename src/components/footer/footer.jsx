import React from "react";
import "./footer.css";
import logo1 from "../../assets/img/microsoft.png";
import logo2 from "../../assets/img/google.png";
import logo3 from "../../assets/img/github.png";
import logo4 from "../../assets/img/apple.png";
import logo5 from "../../assets/img/gpt.png";
import logo6 from "../../assets/img/tailwindcss.png";
const footer = () => {
  return (
    <div className="footer">
      <h3>
        Trusted by <span>200+</span> branch
      </h3>
      <div className="footer-img">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
      </div>
    </div>
  );
};

export default footer;
