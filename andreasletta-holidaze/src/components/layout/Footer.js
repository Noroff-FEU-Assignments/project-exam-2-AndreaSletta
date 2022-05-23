import {
  Row,
  Col,
  Nav,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Footer() {
  return (
    <footer className=" sticky-bottom py-5 px-3">
      <Row xs={1} className="m-0">
        <Col>
          <h3>Holidaze</h3>
        </Col>{" "}
        <Col>
          <Row xs={1} md={3}>
            <Col className="py-1 one">
              <Nav.Link to="/contactus">Contact us</Nav.Link>
              <Nav.Link to="/?">About us</Nav.Link>
              <Row xs={2} className="footer-icons">
                <Col>
                  {" "}
                  <Nav.Link to="/?">
                    <i className="fa fa-brands fa-facebook-square"></i>
                  </Nav.Link>
                </Col>
                <Col>
                  {" "}
                  <Nav.Link to="/?">
                    <i className="fab fa-brands fa-instagram-square"></i>
                  </Nav.Link>
                </Col>
              </Row>
            </Col>
            <Col className="py-1 two">
              <Row xs={1}>
                <Col>
                  <p>Sign up to our newsletter and get the latest deals!</p>
                </Col>
                <Col>
                  <Form>
                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                      Newsletter signup
                    </Form.Label>
                    <InputGroup className="mb-2 ">
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder="Email..."
                      />{" "}
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </InputGroup>
                  </Form>
                </Col>
              </Row>
            </Col>
            <Col className="py-1 three">
              <Row xs={1}>
                <Col>
                  {" "}
                  <Row xs={3} md={1}>
                    <Col>
                      {" "}
                      <Nav.Link to="/?">Support</Nav.Link>
                    </Col>
                    <Col>
                      {" "}
                      <Nav.Link to="/?">Privacy policy</Nav.Link>
                    </Col>
                    <Col>
                      {" "}
                      <Nav.Link to="/?">Therms of use</Nav.Link>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  {" "}
                  <Nav.Link to="/?">Holidaze © 2022</Nav.Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
}
