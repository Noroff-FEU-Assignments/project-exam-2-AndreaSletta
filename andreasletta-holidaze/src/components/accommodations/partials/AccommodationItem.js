import PropTypes from "prop-types";
import { Card, Col, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function AccommodationItem({ id, image, name, description, type }) {
  return (
    <Col className="p-0 p-md-3 p-lg-3" id={id}>
      <ListGroup.Item className="py-4 px-0 ">
        <Link className="link-info " to={`/accommodations/${id}`}>
          <Card className="shadow">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title> {name}</Card.Title>
              <Card.Text>
                {" "}
                <i className="bi bi-house"></i>
                {type}
              </Card.Text>
              <Card.Text>
                {description}
                ...
              </Card.Text>
              <Button variant="outline-primary">Read more</Button>
            </Card.Body>
          </Card>
        </Link>
      </ListGroup.Item>
    </Col>
  );
}

AccommodationItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

AccommodationItem.defaultProps = {
  release_date: "Unknown",
};

export default AccommodationItem;
