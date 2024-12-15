import PropTypes from "prop-types";
import "./icons.css";
import logo2 from "../assets/img/apple.png";
import logo3 from "../assets/img/github.png";
import logo4 from "../assets/img/apple.png";
import logo5 from "../assets/img/gpt.png";
import logo6 from "../assets/img/tailwindcss.png";
import logo7 from "../assets/img/icons8-amazon-50.png";
import logo8 from "../assets/img/icons8-logo-tesla-50.png";
import logo9 from "../assets/img/icons8-playstation-externo-uma-marca-de-jogos-que-consiste-em-consoles-de-videogame-domésticos-logotipo-bold-tal-revivo-24.png";
import logo10 from "../assets/img/icons8-xbox-50.png";
import logo11 from "../assets/img/icons8-logo-discord-50.png";
import logo12 from "../assets/img/icons8-noção-50.png";

function Prop({ url, title }) {
  return (
    <>
      <img src={url} alt={title} />
    </>
  );
}

function Icons() {
  return (
    <div className="icons">
      <Prop url={logo2} title="Amazon Icons" />
      <Prop url={logo3} title="Amazon Icons" />
      <Prop url={logo4} title="Amazon Icons" />
      <Prop url={logo5} title="Amazon Icons" />
      <Prop url={logo6} title="Amazon Icons" />
      <Prop url={logo7} title="Amazon Icons" />
      <Prop url={logo8} title="Amazon Icons" />
      <Prop url={logo9} title="Amazon Icons" />
      <Prop url={logo10} title="Amazon Icons" />
      <Prop url={logo11} title="Amazon Icons" />
      <Prop url={logo12} title="Amazon Icons" />
    </div>
  );
}

Prop.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Icons;
