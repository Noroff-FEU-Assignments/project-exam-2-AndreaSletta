import Heading from "../layout/Heading";
import AdminNavbar from "../layout/AdminNavbar";
import LoginForm from "./partials/LoginForm";
import { Button, Col, Row } from "react-bootstrap";
import { getUsername } from "./utils/Storage";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from "./utils/Logout";
import AdminFooter from "../layout/AdminFooter";
import room from "../../images/room.jpg";

const username = getUsername();

export default function Admin() {
  if (username) {
    return (
      <>
        <AdminNavbar />
        <Container className="clear-header admin px-4">
          <Heading title={"Welcome " + username} />
          <Row xs={1} md={1} lg={2} className="py-4">
            <Col>
              <Row xs={1}>
                <Col className="pb-2">
                  <Link to={`/enquiries`}>
                    <Button variant="outline-primary">Enquiries</Button>
                  </Link>
                </Col>
                <Col className="py-2">
                  <Link to={`/messages`}>
                    <Button variant="outline-primary">Messages</Button>{" "}
                  </Link>
                </Col>
                <Col className="py-2">
                  {" "}
                  <Link to={`/createestablishment`}>
                    <Button variant="outline-primary">
                      Create a new establishment
                    </Button>{" "}
                  </Link>
                </Col>
                <Col className="pt-2">
                  <Button variant="primary" onClick={Logout}>
                    Logout
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Col className=" pt-5  pt-lg-0">
                <img src={room} alt="A bed" />
              </Col>
            </Col>
          </Row>
        </Container>
        <AdminFooter />
      </>
    );
  } else {
    return (
      <>
        <AdminNavbar />
        <Container className="clear-header admin-login px-4">
          <Heading title="Admin" />
          <Row xs={1} md={1} lg={2} className="py-4">
            <Col>
              {" "}
              <LoginForm />
            </Col>
            <Col className="  pt-lg-0">
              <img src={room} alt="A bed" />
            </Col>
          </Row>
        </Container>
        <AdminFooter />
      </>
    );
  }
}
