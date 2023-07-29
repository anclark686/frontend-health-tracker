import { useContext } from "react";
import { Modal, Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

import { NavbarContext } from "../../contexts/NavbarContext";

const HeaderBar = () => {
  const { darkMode, setDarkMode } = useContext(NavbarContext);

  return (
    <>
      <section className="header-bar">
        <section className="brand">

        </section>
        
      </section>
    </>
  );
};

export default HeaderBar;
