import Heading from "../layout/Heading";
import Footer from "../layout/Footer";
import { Form, Button, Container } from "react-bootstrap";
import AddMessage from "./utils/AddMessage";

export default function ContactUs() {
  return (
    <>
      <Heading title="Contact us" />
      <Container id="addMessageContainer">
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
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
