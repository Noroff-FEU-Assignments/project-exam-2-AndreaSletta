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
      <Row>
        <Col xs={12} lg={7} className="carousel-col py-4  ">
          <Carousel className="carousel-dark">
            <Carousel.Item className=" shadow">
              <img
                className=" shadow"
                src={accommodations.attributes.images.data[0].attributes.url}
                alt={
                  accommodations.attributes.images.data[0].attributes
                    .alternativeText
                }
              />
            </Carousel.Item>
            <Carousel.Item className=" shadow">
              <img
                className="shadow"
                src={accommodations.attributes.images.data[1].attributes.url}
                alt={
                  accommodations.attributes.images.data[0].attributes
                    .alternativeText
                }
              />
            </Carousel.Item>
            <Carousel.Item className=" shadow">
              <img
                className=" shadow"
                src={accommodations.attributes.images.data[2].attributes.url}
                alt={
                  accommodations.attributes.images.data[0].attributes
                    .alternativeText
                }
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} lg={5} className="bg-white py-3 px-4 my-lg-4 shadow">
          <Container>
            <p className="pt-1 pb-2">
              <i className="bi bi-house"></i>
              {accommodations.attributes.type}
            </p>
            <p className="py-2">
              <i className="bi bi-map"></i>
              {accommodations.attributes.address}
            </p>
            <p className="py-2">
              <i className="bi bi-currency-dollar"></i>
              {accommodations.attributes.price}
            </p>
            <p> {accommodations.attributes.description}</p>
            <Row className="py-4">
              <Col className="pe-2 ps-0">
                <ListGroup>
                  <p>Facilities:</p>
                  <GetFacilitiesCloseBy object={facilities} />
                </ListGroup>
              </Col>
              <Col className="ps-2 pe-0">
                <p>Close by:</p>
                <ListGroup>
                  <GetFacilitiesCloseBy object={attractions} />
                </ListGroup>
              </Col>
            </Row>
            <GetInquiryModal accommodation={accommodations.attributes.name} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
