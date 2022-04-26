import Heading from "../layout/Heading";
import { Breadcrumb } from "react-bootstrap";
import GetAccommodationsList from "./partials/GetAccommodationsList";
import Filter from "./partials/Filter";
import Footer from "../layout/Footer";

export default function Accommodations() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Accomodations</Breadcrumb.Item>
      </Breadcrumb>
      <Heading title="Accomodations" />
      <Filter />
      <GetAccommodationsList />
      <Footer />
    </>
  );
}
