import { useContext } from "react";
import { Container, Navbar, Button } from "react-bootstrap";

import { NavbarContext } from "../../contexts/NavbarContext";

import "../../assets/css/Layout.css";

import sun from "../../assets/icons/bright.png";
import moon from "../../assets/icons/moon.png";

const HeaderBar = ({ onMenuClick }: { onMenuClick: (bool: boolean) => void}) => {
  const { setDarkMode } = useContext(NavbarContext);

  const handleDarkMode = (bool: boolean) => {
    setDarkMode(bool);
    document.cookie = `darkmode=${bool}; max-age=31536000;`;
  };

  return (
    <div className="header-bar">
      <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Reyaly Health Tracker</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <section className="btn-container">
              <Button
                className="dark-light-btn btn btn-light"
                onClick={() => handleDarkMode(false)}
              >
                <img src={sun} alt="sun" className="dark-light-img" />
              </Button>
              <Button className="dark-light-btn btn btn-dark" onClick={() => handleDarkMode(true)}>
                <img src={moon} alt="sun" className="dark-light-img" />
              </Button>
              <Button className="btn btn-info btn-lg" onClick={() => onMenuClick(true)}>Menu</Button>
            </section>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderBar;
