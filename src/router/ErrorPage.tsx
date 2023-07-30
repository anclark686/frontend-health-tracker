import { useState } from "react";
import { useRouteError, Link } from "react-router-dom";

import HeaderBar from "../components/layout/HeaderBar";
import SideBar from "../components/layout/SideBar";
import Footer from "../components/layout/Footerbar";

import "../App.css";

const ErrorPage = () => {
  const error: unknown = useRouteError();
  console.error(error);

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleMenuClick = (bool: boolean) => {
    setOpenSidebar(bool);
  };

  return (
    <div id="error-page" className="App">
      <header>
        <HeaderBar onMenuClick={handleMenuClick} />
      </header>
      <SideBar onMenuClick={handleMenuClick} show={openSidebar} />
      <div className="error-message">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{(error as Error)?.message || (error as { statusText?: string })?.statusText}</i>
        </p>
        <Link to={"/"}>Go Home</Link>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ErrorPage;
