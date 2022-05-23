import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import { ListGroup } from "react-bootstrap";
import { Row, Container } from "react-bootstrap";
import AccommodationItem from "./AccommodationItem";

function GetAccommodationsList() {
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

  let initialList = [accommodations];

  return (
    <ListGroup className="pb-5 pt-3">
      <Row xs={1} md={2} lg={4} className="m-0">
        {initialList[0].map(accommodation => {
          return (
            <AccommodationItem
              key={accommodation.id}
              id={accommodation.id}
              name={accommodation.attributes.name}
              image={accommodation.attributes.images.data[0].attributes.url}
              description={accommodation.attributes.description.slice(0, 100)}
              type={accommodation.attributes.type}
            />
          );
        })}
      </Row>
    </ListGroup>
  );
}

export default GetAccommodationsList;
