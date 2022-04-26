import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Accommodations from "../accommodations/Accommodations";
import SingleAccommodation from "../singleAccommodation/SingleAccommodation";
import ContactUs from "../contactUs/ContactUs";
import AdminHome from "../adminHome/AdminHome";
import SearchInput from "./utils/SearchInput";
import SearchContent from "./utils/SearchContent";

export default function CreateNavbar() {
  return (
    <Router>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="px-3"
        id="navbar"
      >
        <NavLink to="/">
          <Navbar.Brand>
            <div id="logo">Holidaze</div>
          </Navbar.Brand>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#search-bar"
          aria-controls="search-bar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="search-button"
        >
          <i className="bi bi-search"></i>
        </button>
        <div className="collapse navbar-collapse" id="search-bar">
          <form className="d-flex py-3">
            <SearchInput />
          </form>
        </div>
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
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/accommodations" className="nav-link">
              Accommodations
            </NavLink>
            <NavLink to="/contactus" className="nav-link">
              Contact us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/accommodations/:id" element={<SingleAccommodation />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/adminhome" element={<AdminHome />} />
        </Routes>
      </Container>
    </Router>
  );
}
