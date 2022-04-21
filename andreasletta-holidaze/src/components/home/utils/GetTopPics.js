import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import { Card, Button, ListGroup } from "react-bootstrap";
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
    return <div className="text-info">Loading...</div>;
  }

  if (error) {
    return <div className="text-warning">An error occured: {error}</div>;
  }

  return (
    <>
      <ListGroup>
        <Row xs={1} md={2} lg={4}>
          {accommodations.map(accommodation => {
            if (accommodation.attributes.featured === true) {
              return (
                <Col key={accommodation.id} className="p-0">
                  <ListGroup.Item>
                    <Link
                      className="link-info"
                      to={`/accommodations/${accommodation.id}`}
                    >
                      <Card>
                        <Card.Img
                          variant="top"
                          src={
                            accommodation.attributes.images.data[0].attributes
                              .url
                          }
                        />
                        <Card.Body>
                          <Card.Title>
                            {" "}
                            {accommodation.attributes.name}
                          </Card.Title>
                          <Card.Text>
                            {accommodation.attributes.description.slice(0, 100)}
                            ...
                          </Card.Text>
                          <Button variant="primary">Read more</Button>
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
