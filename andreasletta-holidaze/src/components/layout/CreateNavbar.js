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
import Admin from "../admin/Admin";
import SearchInput from "./utils/SearchInput";
import AdminCreateEstablishment from "../adminCreateEstablishment/AdminCreateEstablishment";
import AdminEnquiries from "../adminEnquiries/AdminEnquiries";
import AdminMessages from "../adminMessages/AdminMessages";

export default function CreateNavbar() {
  return (
    <Router>
      <Navbar
        variant="dark"
        expand="lg"
        sticky="top"
        id="navbar"
        className="py-0"
      >
        <NavLink to="/" id="logo-container">
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
        <div className="collapse navbar-collapse" id="search-bar">
          <form className="d-flex ">
            <SearchInput />
          </form>
        </div>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-md-center py-4 py-lg-0 "
        >
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link py-2 fs-6 text">
              Home
            </NavLink>
            <NavLink to="/accommodations" className="nav-link py-2 fs-6 text">
              Accommodations
            </NavLink>
            <NavLink to="/contactus" className="nav-link py-2 fs-6 text">
              Contact us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="p-0 m-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/accommodations/:id" element={<SingleAccommodation />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/enquiries" element={<AdminEnquiries />} />
          <Route path="/messages" element={<AdminMessages />} />
          <Route
            path="/createestablishment"
            element={<AdminCreateEstablishment />}
          />
        </Routes>
      </Container>
    </Router>
  );
}
