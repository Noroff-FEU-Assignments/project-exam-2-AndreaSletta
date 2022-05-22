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

  const checkedFilters = {
    accommodations: {
      hotel: false,
      cabin: false,
      guesthouse: false,
      hostel: false,
      bnb: false,
      apartment: false,
    },
  };

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

  //
  let initialList = [accommodations];

  let accTypes = [];

  async function filteredContent() {
    accTypes = [];

    let acc = [];

    //add endpoint to array

    if (checkedFilters.accommodations.hotel) {
      accTypes.push({ $eq: "Hotel" });
      acc.push("Hotel");
    }
    if (checkedFilters.accommodations.cabin) {
      accTypes.push({ $eq: "Cabin" });
      acc.push("Cabin");
    }
    if (checkedFilters.accommodations.guesthouse) {
      accTypes.push({ $eq: "Guesthouse" });
      acc.push("Guesthouse");
    }
    if (checkedFilters.accommodations.hostel) {
      accTypes.push({ $eq: "Hostel" });
      acc.push("Hostel");
    }
    if (checkedFilters.accommodations.bnb) {
      accTypes.push({ $eq: "B&Bs" });
      acc.push("B&Bs");
    }
    if (checkedFilters.accommodations.apartment) {
      accTypes.push({ $eq: "Apartment" });
      acc.push("Apartment");
    }

    const qs2 = require("qs");
    const query = qs2.stringify(
      {
        filters: {
          type: { $eq: acc },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    try {
      const response = await fetch(BASE_URL + `accommodations?${query}`);

      if (response.ok) {
        const json = await response.json();
        console.log(json.data);

        initialList = [json.data];

        console.log("there new:", initialList);
      } else {
        setError("An error occured");
      }
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  }

  function filterHotel(event) {
    if (event.target.checked === true) {
      checkedFilters.accommodations.hotel = true;
    } else {
      checkedFilters.accommodations.hotel = false;
    }
  }

  function filterCabin(event) {
    if (event.target.checked === true) {
      checkedFilters.accommodations.cabin = true;
    } else {
      checkedFilters.accommodations.cabin = false;
    }
  }

  function filterGuesthouse(event) {
    if (event.target.checked === true) {
      checkedFilters.accommodations.guesthouse = true;
    } else {
      checkedFilters.accommodations.guesthouse = false;
    }
  }

  function filterHostel(event) {
    if (event.target.checked === true) {
      checkedFilters.accommodations.hostel = true;
    } else {
      checkedFilters.accommodations.hostel = false;
    }
  }

  function filterBnBs(event) {
    if (event.target.checked === true) {
      checkedFilters.accommodations.bnb = true;
    } else {
      checkedFilters.accommodations.bnb = false;
    }
  }

  function filterApartment(event) {
    if (event.target.checked === true) {
      checkedFilters.accommodations.apartment = true;
    } else {
      checkedFilters.accommodations.apartment = false;
    }
  }
  console.log("here:", accommodations);
  console.log("there:", initialList);

  return (
    <>
      <InputGroup className="mb-3 filter d-none  ">
        <DropdownButton
          variant="outline-primary"
          title="Filter"
          id="input-group-dropdown-1"
        >
          <i className="bi bi-filter-left"></i>

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
