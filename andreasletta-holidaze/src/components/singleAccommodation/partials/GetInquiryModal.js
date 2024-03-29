import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddInquiry from "../utils/AddInquiry";
import { Form } from "react-bootstrap";

export default function GetInquiryModal({ accommodation }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="my-4" onClick={handleShow}>
        Send an enquiry
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="mx-3 mt-2">
          <Modal.Title>Send {accommodation} an enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body id="inquiryModal" className="mx-3 mb-2">
          <Form>
            <Form.Group className="mb-3 py-2" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name..." />
              <Form.Text id="formNameMessage" muted></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 py-2" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email..." />
              <Form.Text id="formEmailMessage" muted></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 py-2" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject..." />
              <Form.Text id="formSubjectMessage" muted></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 py-2" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Message..." />
              <Form.Text id="formMessageMessage" muted></Form.Text>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={AddInquiry}
              className="py-2"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
