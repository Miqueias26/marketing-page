import "./footer.css";
import logo1 from "../../assets/img/microsoft.png";
import logo2 from "../../assets/img/google.png";
import logo3 from "../../assets/img/github.png";
import logo4 from "../../assets/img/apple.png";
import logo5 from "../../assets/img/gpt.png";
import logo6 from "../../assets/img/tailwindcss.png";
import logo7 from "../../assets/img/icons8-amazon-50.png";
import logo8 from "../../assets/img/icons8-logo-tesla-50.png";
import logo9 from "../../assets/img/icons8-playstation-externo-uma-marca-de-jogos-que-consiste-em-consoles-de-videogame-domésticos-logotipo-bold-tal-revivo-24.png";
import logo10 from "../../assets/img/icons8-xbox-50.png";
import logo11 from "../../assets/img/icons8-logo-discord-50.png";
import logo12 from "../../assets/img/icons8-noção-50.png";

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
        <img src={logo7} alt="" />
        <img src={logo8} alt="" />
        <img src={logo9} alt="" />
        <img src={logo10} alt="" />
        <img src={logo11} alt="" />
        <img src={logo12} alt="" />
      </div>
    </div>
  );
};

export default footer;
