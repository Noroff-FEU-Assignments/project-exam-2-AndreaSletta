import Heading from "../layout/Heading";
import { Breadcrumb, Container } from "react-bootstrap";
import GetAccommodationsList from "./partials/GetAccommodationsList";
import Filter from "./partials/Filter";
import Footer from "../layout/Footer";

export default function Accommodations() {
  return (
    <>
      <Container className="px-4">
        <Breadcrumb className="clear-header">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Accomodations</Breadcrumb.Item>
        </Breadcrumb>
        <Heading title="Accomodations" />
        <GetAccommodationsList />
      </Container>
      <Footer />
    </>
  );
}
