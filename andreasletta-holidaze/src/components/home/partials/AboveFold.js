import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import pillow from "../../../images/pillow.jpg";
import bed from "../../../images/bed.jpg";
function AboveFold() {
  return (
    <Container className="px-0  clear-header above-fold">
      <Row xs={1} md={2} className="m-0 pt-md-5 pt-lg-5 ">
        <Col className="col1 pt-5 pt-md-0 pt-lg-0 px-0 ">
          <Row xs={1} className="m-0 ">
            <Col className="px-4 mx-md-4">
              <Heading
                title="Your next journey is 
                        just a click away!"
              />
              <Link className="link-info pt-5" to={`/accommodations`}>
                <Button variant="outline-primary my-2">Accommodations</Button>
              </Link>
            </Col>
            <Col className="ps-0 px-0 pe-5">
              <img
                className="shadow"
                src={pillow}
                alt="Closeup of pillows on a bed"
              />
            </Col>
          </Row>
        </Col>
        <Col className="d-none d-sm-flex pe-0 col2">
          <img src={bed} alt="A bed" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboveFold;
