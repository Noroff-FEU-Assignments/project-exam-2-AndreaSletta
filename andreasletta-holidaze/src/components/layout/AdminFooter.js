import { Row, Col } from "react-bootstrap";

export default function AdminFooter() {
  return (
    <footer className=" sticky-bottom bg-light">
      <Row xs={1} className="mx-0 p-3">
        <Col>
          <p>Admin</p>
        </Col>
        <Col>
          <h3>Holidaze</h3>
        </Col>
        <p>Holidaze © 2022</p>
        <Col></Col>
      </Row>
    </footer>
  );
}
