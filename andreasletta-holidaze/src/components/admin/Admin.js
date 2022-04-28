import Heading from "../layout/Heading";
import AdminNavbar from "../layout/AdminNavbar";
import LoginForm from "./partials/LoginForm";
import { Button, Col, Row } from "react-bootstrap";
import { getUsername } from "./utils/Storage";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from "./utils/Logout";
import AdminFooter from "../layout/AdminFooter";

const username = getUsername();

export default function Admin() {
  if (username) {
    console.log(username);
    return (
      <>
        <AdminNavbar />
        <Container className="clear-header">
          <Heading title={"Welcome " + username} />
          <Row xs={1}>
            <Col>
              <Link to={`/enquiries`}>
                <Button variant="outline-primary">Enquiries</Button>
              </Link>
            </Col>
            <Col>
              <Link to={`/messages`}>
                <Button variant="outline-primary">Messages</Button>{" "}
              </Link>
            </Col>
            <Col>
              {" "}
              <Link to={`/createestablishment`}>
                <Button variant="outline-primary">
                  Create a new establishment
                </Button>{" "}
              </Link>
            </Col>
            <Col>
              <Button variant="dark" onClick={Logout}>
                Logout
              </Button>
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
        <Container className="clear-header">
          <Heading title="Admin" />
          <LoginForm />
        </Container>
        <AdminFooter />
      </>
    );
  }
}
