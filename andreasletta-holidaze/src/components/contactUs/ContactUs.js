import Heading from "../layout/Heading";
import Footer from "../layout/Footer";
import { Form, Button, Container, Row, Col, Breadcrumb } from "react-bootstrap";
import AddMessage from "./utils/AddMessage";
import room from "../../images/room.jpg";

export default function ContactUs() {
  return (
    <>
      <Heading title="Contact us" />
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
      </Breadcrumb>
      <Row xs={1} md={2}>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name..." />
              <Form.Text id="formNameMessage" muted></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email..." />
              <Form.Text id="formEmailMessage" muted></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject..." />
              <Form.Text id="formSubjectMessage" muted></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" placeholder="Message..." />
              <Form.Text id="formMessageMessage" muted></Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={AddMessage}>
              Submit
            </Button>{" "}
            <Container id="addMessageContainer"></Container>
          </Form>
        </Col>{" "}
        <Col className="d-none d-sm-block">
          <img src={room} alt="A bed" />
        </Col>
      </Row>
      <Footer />
    </>
  );
}