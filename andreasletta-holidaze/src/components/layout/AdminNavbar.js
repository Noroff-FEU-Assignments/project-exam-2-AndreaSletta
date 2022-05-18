import { Navbar, Nav, NavLink, Button } from "react-bootstrap";
import { getUsername } from "../admin/utils/Storage";
import { Link } from "react-router-dom";
const username = getUsername();

export default function AdminNavbar() {
  window.addEventListener("load", function () {
    //hide normal navbar
    const oldNavbar = document.querySelector("#navbar");
    oldNavbar.style.display = "none";
  });

  if (username) {
    return (
      <Navbar
        variant="dark"
        expand="lg"
        sticky="top"
        className="py-0 admin-navbar"
        id="navbar"
      >
        <Link to="/admin">
          <Navbar.Brand>
            <div id="logo">Holidaze Admin</div>
          </Navbar.Brand>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#basic-navbar-nav"
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="hamburger"
        >
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </button>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-md-center"
        >
          <Nav className="mr-auto">
            <Link to="/admin" className="nav-link">
              Admin
            </Link>
            <Link to="/enquiries" className="nav-link">
              Enquiries
            </Link>
            <Link to="/messages" className="nav-link">
              Messages
            </Link>
            <Link to="/createestablishment" className="nav-link">
              Create a new establishment
            </Link>
            <Button>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar
        variant="dark"
        expand="lg"
        sticky="top"
        className="px-3 admin-navbar-hidden"
        id="navbar"
      >
        <NavLink to="/">
          <Navbar.Brand>
            <div id="logo">Holidaze Admin</div>
          </Navbar.Brand>
        </NavLink>
      </Navbar>
    );
  }
}
