import { BASE_URL } from "../../../constants/api";
import { useState, useEffect } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  ListGroup,
  Link,
  Button,
  Carousel,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Heading from "../../layout/Heading";
import { Breadcrumb } from "react-bootstrap";
import GetFacilitiesCloseBy from "../utils/GetFacilitiesCloseBy";

export default function GetSingleAccommodation() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams();

  const url = BASE_URL + "accommodations/" + id + "?populate=*";

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
            console.log("An error occured");
          }
        } catch (error) {
          setError(error.toString());
          console.log(error);
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
  console.log(accommodations);

  const attractions = accommodations.attributes.attractions[0];
  //console.log(typeof attractions);
  // console.log(attractions.Edvard_Grieg_Museum_Troldhaugen);
  // console.log(typeof attractions.Edvard_Grieg_Museum_Troldhaugen);
  GetFacilitiesCloseBy(attractions);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/accommodations">Accommodations</Breadcrumb.Item>
        <Breadcrumb.Item active>
          {accommodations.attributes.name.slice(0, 15)}...
        </Breadcrumb.Item>
      </Breadcrumb>

      <Heading title={accommodations.attributes.name} />
      <Row xs={1} md={2}>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={accommodations.attributes.images.data[0].attributes.url}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={accommodations.attributes.images.data[1].attributes.url}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={accommodations.attributes.images.data[2].attributes.url}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <p>
            <i className="bi bi-house"></i>
            {accommodations.attributes.type}
          </p>
          <p>
            <i className="bi bi-map"></i>
            {accommodations.attributes.address}
          </p>
          <p>
            <i className="bi bi-currency-dollar"></i>
            {accommodations.attributes.price}
          </p>
          <p> {accommodations.attributes.description}</p>
          <Row xs={2}>
            <Col>
              <ListGroup>
                <h4>Facilities:</h4>

                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h4>Close by:</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
