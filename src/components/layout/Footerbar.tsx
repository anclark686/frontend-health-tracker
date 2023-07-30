import '../../assets/css/Layout.css'

import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";

const Footer = () => {
  const today = new Date();

  return (
    <div className="footer">
      <div className="footer-links">
        <a href="https://github.com/anclark686" target="_blank" rel="noreferrer">
          <img
            alt="github"
            src={github}
            width="35"
            height="35"
            className="footer-image"
          />
        </a>
        <a href="https://www.linkedin.com/in/anclark686/" target="_blank" rel="noreferrer">
          <img
            alt="linkedin"
            src={linkedin}
            width="35"
            height="35"
            className="footer-image"
          />
        </a>
        <a
        href="https://www.ancportfolio.link"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
      >
        <div id="portfolioFooter">Portfolio </div>
      </a>
      </div>
      

      <p className='copyright'>Copyright &copy; Reyaly Tech {today.getFullYear()}</p>
    </div>
  );
};

export default Footer;
