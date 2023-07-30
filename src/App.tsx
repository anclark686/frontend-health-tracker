import { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";

import HeaderBar from "./components/layout/HeaderBar";
import SideBar from "./components/layout/SideBar";
import Footer from "./components/layout/Footerbar";

import { NavbarContext } from "./contexts/NavbarContext";

import "./App.css";

const App = () => {
  const { darkMode, setDarkMode } = useContext(NavbarContext);

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleMenuClick = (bool: boolean) => {
    setOpenSidebar(bool);
  };

  useEffect(() => {
    // While loading, load the state from the localStorage.
    const darkModeCookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("darkmode="))
      ?.split("=")[1];
    setDarkMode(darkModeCookieValue === "true");
  }, []);

  return (
    <div className={darkMode ? "App app-dark" : "App app-light"}>
      <header>
        <HeaderBar onMenuClick={handleMenuClick} />
      </header>
      <SideBar onMenuClick={handleMenuClick} show={openSidebar} />
      <main id="detail">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
