import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import { ListGroup } from "react-bootstrap";
import { Row, Container } from "react-bootstrap";
import AccommodationItem from "./AccommodationItem";
import { InputGroup, Dropdown, DropdownButton, Button } from "react-bootstrap";

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
            console.log(json.data);
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

  //
  let initialList = [accommodations];

  let accTypes = [];

  let accFacilities = [];

  async function filteredContent() {
    accTypes.forEach(async accType => {
      accFacilities.forEach(async accFacility => {
        const qs = require("qs");
        const query = qs.stringify(
          {
            filters: {
              type: accType,
              facilities: accFacility,
            },
          },
          {
            encodeValuesOnly: true,
          }
        );
        try {
          const response = await fetch(
            BASE_URL + `accommodations?populate=*${query}`
          );

          if (response.ok) {
            const json = await response.json();
            console.log(json.data);

            initialList = [json.data];
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      });
    });
  }

  //functions that will add endpoint to filter url

  //types
  function filterHotel(event) {
    if (event.target.checked == true) {
      console.log("yes");
      accTypes.push({ $contains: "Hotel" });
    } else {
      console.log("no");
    }
  }
  function filterCabin() {
    accTypes.push({ $in: "Cabin" });
  }
  function filterGuesthouse() {
    accTypes.push({ $in: "Guesthouse" });
  }
  function filterHostel() {
    accTypes.push({ $in: "Hostel" });
  }
  function filterBnBs() {
    accTypes.push({ $in: "B&Bs" });
  }
  function filterApartment() {
    accTypes.push({ $in: "Apartment" });
  }

  //facitilies
  function filterParking() {
    accFacilities.push({
      Parking_available: {
        $eq: true,
      },
    });
  }
  function filterBreakfast() {
    accFacilities.push({
      Breakfast_included: {
        $eq: true,
      },
    });
  }
  function filterPet() {
    accFacilities.push({
      Pet_friendly: {
        $eq: true,
      },
    });
  }
  function filterGym() {
    accFacilities.push({
      Gym: {
        $eq: true,
      },
    });
  }
  function filterPool() {
    accFacilities.push({
      Pool: {
        $eq: true,
      },
    });
  }
  function filterInternett() {
    accFacilities.push({
      Internett: {
        $eq: true,
      },
    });
  }
  function filterResturant() {
    accFacilities.push({
      Resturant: {
        $eq: true,
      },
    });
  }

  return (
    <>
      <InputGroup className="mb-3 filter  ">
        <DropdownButton
          variant="outline-primary"
          title="Filter"
          id="input-group-dropdown-1"
        >
          <p className="fw-bold m-0">Facilities</p>
          <Container className="px-0  ">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="Breakfast_included"
              onChange={filterBreakfast}
            />
            <label className="form-check-label" htmlFor="Breakfast_included">
              Breakfast included
            </label>
          </Container>
          <Container className="px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="Gym"
              onChange={filterGym}
            />
            <label className="form-check-label" htmlFor="Gym">
              Gym
            </label>{" "}
          </Container>
          <Container className="px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="Internett"
              onChange={filterInternett}
            />
            <label className="form-check-label" htmlFor="Internett">
              Internett
            </label>{" "}
          </Container>
          <Container className="px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="Parking_available"
              onChange={filterParking}
            />
            <label className="form-check-label" htmlFor="Parking_available">
              Parking available
            </label>{" "}
          </Container>
          <Container className="px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="Pet_friendly"
              onChange={filterPet}
            />
            <label className="form-check-label" htmlFor="Pet_friendly">
              Pet friendly
            </label>{" "}
          </Container>
          <Container className="px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="Pool"
              onChange={filterPool}
            />
            <label className="form-check-label" htmlFor="Pool">
              Pool
            </label>{" "}
          </Container>
          <Container className="px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="Resturant"
              onChange={filterResturant}
            />
            <label className="form-check-label" htmlFor="Resturant">
              Resturant
            </label>{" "}
          </Container>

          <Dropdown.Divider />
          <p className="fw-bold m-0">Type of accommodations</p>

          <Container className="px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="Hotel"
              onChange={filterHotel}
            />
            <label className="form-check-label" htmlFor="Hotel">
              Hotel
            </label>{" "}
          </Container>
          <Container className="px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="Cabin"
              onChange={filterCabin}
            />
            <label className="form-check-label" htmlFor="Cabin">
              Cabin
            </label>{" "}
          </Container>
          <Container className="px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="Guesthouse"
              onChange={filterGuesthouse}
            />
            <label className="form-check-label" htmlFor="Guesthouse">
              Guesthouse
            </label>{" "}
          </Container>
          <Container className="px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="Hostel"
              onChange={filterHostel}
            />
            <label className="form-check-label" htmlFor="Hostel">
              Hostel
            </label>{" "}
          </Container>
          <Container className="px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="B&Bs
          "
              onChange={filterBnBs}
            />
            <label className="form-check-label" htmlFor="B&Bs">
              B&Bs
            </label>{" "}
          </Container>
          <Container className="px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="Apartment"
              onChange={filterApartment}
            />
            <label className="form-check-label" htmlFor="Apartment">
              Apartment
            </label>{" "}
          </Container>

          <Dropdown.Divider />
          <Button variant="outline-primary" onClick={filteredContent}>
            Use filter
          </Button>
        </DropdownButton>
      </InputGroup>
      <ListGroup>
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
    </>
  );
}

export default GetAccommodationsList;
