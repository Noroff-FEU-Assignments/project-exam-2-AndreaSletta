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

function CreateNavbar() {
  return (
    <Router>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="px-3"
      >
        <NavLink to="/">
          <Navbar.Brand>Logo</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/accommodations/:id" element={<SingleAccommodation />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default CreateNavbar;
