import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import { Card, Button, ListGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function GetTopPics() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BASE_URL + "accommodations?populate=*";

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();

            setAccommodations(json.data);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return (
      <Container className="loading">
        <i className="fas fa-spinner fa-pulse  text-body"></i>
      </Container>
    );
  }

  if (error) {
    return <div className="text-warning">An error occured: {error}</div>;
  }

  return (
    <>
      <ListGroup>
        <Row xs={1} md={2} lg={4} className="m-0 ">
          {accommodations.map(accommodation => {
            if (accommodation.attributes.featured === true) {
              return (
                <Col key={accommodation.id} className="p-0">
                  <ListGroup.Item className="py-4  ">
                    <Link
                      className="link-dark link-info text-decoration-none"
                      to={`/accommodations/${accommodation.id}`}
                    >
                      <Card className="shadow">
                        <Card.Img
                          className="rounded-0"
                          variant="top"
                          src={
                            accommodation.attributes.images.data[0].attributes
                              .url
                          }
                        />
                        <Card.Body className="p-4">
                          <Card.Title>
                            <h3>{accommodation.attributes.name}</h3>
                          </Card.Title>
                          <Card.Text>
                            {accommodation.attributes.description.slice(0, 100)}
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
          })}
        </Row>
      </ListGroup>
    </>
  );
}

export default GetTopPics;
