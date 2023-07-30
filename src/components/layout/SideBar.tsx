import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

import "../../assets/css/Layout.css";

const SideBar = ({
  show,
  onMenuClick,
}: {
  show: boolean;
  onMenuClick: (bool: boolean) => void;
}) => {
  return (
    <>
      <Offcanvas show={show} onHide={() => onMenuClick(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to="/views/food" onClick={() => onMenuClick(false)}>
            <div className="menu-item">Food </div>
          </Link>
          <Link to="/views/exercise" onClick={() => onMenuClick(false)}>
            <div className="menu-item">Exercise</div>
          </Link>
          <Link to="/views/weight" onClick={() => onMenuClick(false)}>
            <div className="menu-item">Weight</div>
          </Link>
          <Link to="/views/water" onClick={() => onMenuClick(false)}>
            <div className="menu-item">Water</div>
          </Link>
          <Link to="/views/meds" onClick={() => onMenuClick(false)}>
            <div className="menu-item">Medications</div>
          </Link>
          <Link to="/settings" onClick={() => onMenuClick(false)}>
            <div className="menu-item">Settings</div>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideBar;
