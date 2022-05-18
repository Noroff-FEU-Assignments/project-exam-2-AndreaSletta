import { BASE_URL } from "../../../constants/api";
import { useState, useEffect } from "react";
import { Row, Col, ListGroup, Carousel, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Heading from "../../layout/Heading";
import { Breadcrumb } from "react-bootstrap";
import GetFacilitiesCloseBy from "../utils/GetFacilitiesCloseBy";
import GetInquiryModal from "./GetInquiryModal";

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
  const facilities = accommodations.attributes.facilities[0];

  return (
    <Container className="px-4 pb-5 single-accommodations-container">
      <Breadcrumb className="clear-header">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/accommodations">Accommodations</Breadcrumb.Item>
        <Breadcrumb.Item active>
          {accommodations.attributes.name}
        </Breadcrumb.Item>
      </Breadcrumb>

      <Heading title={accommodations.attributes.name} />
      <Row xs={1} lg={2}>
        <Col className="carousel-col py-4  ">
          <Carousel className="carousel-dark">
            <Carousel.Item>
              <img
                className=" shadow"
                src={accommodations.attributes.images.data[0].attributes.url}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="shadow"
                src={accommodations.attributes.images.data[1].attributes.url}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" shadow"
                src={accommodations.attributes.images.data[2].attributes.url}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="bg-white py-3 px-4 my-lg-4 shadow">
          <p className="py-1">
            <i className="bi bi-house"></i>
            {accommodations.attributes.type}
          </p>
          <p className="py-1">
            <i className="bi bi-map"></i>
            {accommodations.attributes.address}
          </p>
          <p className="py-1">
            <i className="bi bi-currency-dollar"></i>
            {accommodations.attributes.price}
          </p>
          <p> {accommodations.attributes.description}</p>
          <Row xs={2} className="py-4">
            <Col>
              <ListGroup>
                <h4>Facilities:</h4>
                <GetFacilitiesCloseBy object={facilities} />
              </ListGroup>
            </Col>
            <Col>
              <h4>Close by:</h4>
              <ListGroup>
                <GetFacilitiesCloseBy object={attractions} />
              </ListGroup>
            </Col>
          </Row>
          <GetInquiryModal accommodation={accommodations.attributes.name} />
        </Col>
      </Row>
    </Container>
  );
}
