import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../layout/Heading";
import pillow from "../../../images/pillow.jpg";
import bed from "../../../images/bed.jpg";
function AboveFold() {
  return (
    <Container className="p-0">
      <Row xs={1} md={2}>
        <Col>
          <Heading
            title="Your next journey is 
just a click away!"
          />
          <img src={pillow} alt="Closeup of pillows on a bed" />
        </Col>
        <Col className="d-none d-sm-block">
          <img src={bed} alt="A bed" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboveFold;
