import Heading from "../layout/Heading";
import Footer from "../layout/Footer";
import { Form, Button, Container, Row, Col, Breadcrumb } from "react-bootstrap";
import AddMessage from "./utils/AddMessage";
import room from "../../images/room.jpg";

export default function ContactUs() {
  return (
    <>
      <Container className="px-4  contact-us clear-header">
        <Heading title="Contact us" />
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
        </Breadcrumb>
        <Row xs={1} md={1} lg={2} className="pb-5">
          <Col className="pt-lg-5">
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
                <Form.Control as="textarea" rows={3} placeholder="Message..." />
                <Form.Text id="formMessageMessage" muted></Form.Text>
              </Form.Group>
              <Container id="addMessageContainer"></Container>
              <Button variant="primary" type="submit" onClick={AddMessage}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col className="d-none d-sm-block pt-5 ">
            <img src={room} alt="A bed" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
