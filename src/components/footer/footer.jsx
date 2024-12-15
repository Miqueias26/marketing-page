import "./footer.css";
import Icons from "../../utilities/icons";

const Footer = () => {
  return (
    <div className="footer">
      <h3>
        Trusted by <span>200+</span> branch
      </h3>
      <div className="footer-img">
        <Icons />
      </div>
      <div className="copyright">
        <p>&copy;Dev CODE</p>
      </div>
    </div>
  );
};

export default Footer;
