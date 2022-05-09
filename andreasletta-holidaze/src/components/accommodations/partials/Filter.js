import { InputGroup, Dropdown, DropdownButton, Button } from "react-bootstrap";

export default function Filter() {
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
    </>
  );
}
