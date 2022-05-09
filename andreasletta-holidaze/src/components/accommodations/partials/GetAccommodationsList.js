import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import { ListGroup } from "react-bootstrap";
import { Row } from "react-bootstrap";
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

  const initialList = [accommodations];

  return (
    <>
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          <h4>Facilities</h4>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Breakfast_included"
          />
          <label className="form-check-label" htmlFor="Breakfast_included">
            Breakfast included
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Gym"
          />
          <label className="form-check-label" htmlFor="Gym">
            Gym
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Internett"
          />
          <label className="form-check-label" htmlFor="Internett">
            Internett
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Parking_available"
          />
          <label className="form-check-label" htmlFor="Parking_available">
            Parking available
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Pet_friendly"
          />
          <label className="form-check-label" htmlFor="Pet_friendly">
            Pet friendly
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Pool"
          />
          <label className="form-check-label" htmlFor="Pool">
            Pool
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Resturant"
          />
          <label className="form-check-label" htmlFor="Resturant">
            Resturant
          </label>
          <Dropdown.Divider />
          <h4>Type of accommodations</h4>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Hotel"
          />
          <label className="form-check-label" htmlFor="Hotel">
            Hotel
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Cabin"
          />
          <label className="form-check-label" htmlFor="Cabin">
            Cabin
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Guesthouse"
          />
          <label className="form-check-label" htmlFor="Guesthouse">
            Guesthouse
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Hostel"
          />
          <label className="form-check-label" htmlFor="Hostel">
            Hostel
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="B&Bs
          "
          />
          <label className="form-check-label" htmlFor="B&Bs">
            B&Bs
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Apartment"
          />
          <label className="form-check-label" htmlFor="Apartment">
            Apartment
          </label>{" "}
          <Dropdown.Divider />
          <Button variant="primary">Use filter</Button>
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
