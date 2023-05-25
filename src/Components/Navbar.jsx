import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";

const Navbar = () => {
  return (
    <header className="shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              <img src={logo} alt="" />
              Timly
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-5" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="individuals">
                    Individuals
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="teams">
                    Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="enterprice">
                    Enterprice
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
