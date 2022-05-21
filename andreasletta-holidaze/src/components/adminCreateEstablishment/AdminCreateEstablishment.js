import { getUsername } from "../admin/utils/Storage";
import { Container } from "react-bootstrap";
import AdminNavbar from "../layout/AdminNavbar";
import Heading from "../layout/Heading";
import AdminFooter from "../layout/AdminFooter";
import CreateEstablishment from "./utils/CreateEstablishment";
import {
  Col,
  Form,
  Row,
  Button,
  DropdownButton,
  InputGroup,
  FormControl,
  Breadcrumb,
} from "react-bootstrap";

const username = getUsername();

export default function AdminCreateEstablishment() {
  if (username) {
    return (
      <>
        <AdminNavbar />
        <Container className="clear-header">
          <Breadcrumb>
            <Breadcrumb.Item href="/admin">Admin</Breadcrumb.Item>
            <Breadcrumb.Item active>Create a new establishment</Breadcrumb.Item>
          </Breadcrumb>
          <Heading title={"Create a new establishment"} />
          <Row xs={1} md={2}>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Accommodation name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Accommodation name..."
                  />
                  <Form.Text id="formNameMessage" muted></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Address..." />
                  <Form.Text id="formAddressMessage" muted></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="text" placeholder="Price..." />
                  <Form.Text id="formPriceMessage" muted></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFeatured">
                  <Form.Label>Featured</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>False</option>
                    <option>True</option>
                  </Form.Select>
                  <Form.Text id="formFeaturedMessage" muted></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    placeholder="Description..."
                  />
                  <Form.Text id="formDescriptionMessage" muted></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formType">
                  <Form.Label>Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Hotel</option>
                    <option>Apartment</option>
                    <option>Cabin</option>
                    <option>Hostel</option>
                    <option>Guesthouse</option>
                    <option>B&Bs</option>
                  </Form.Select>
                  <Form.Text id="formTypeMessage" muted></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImage1">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="url" placeholder="Image url..." />
                  <Form.Text id="formImage1Message" muted></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImage2">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="url" placeholder="Image url..." />
                  <Form.Text id="formImage2Message" muted></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImage3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="url" placeholder="Image url..." />
                  <Form.Text id="formImage3Message" muted></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFacilities">
                  <Form.Label>Facilities</Form.Label>
                  <DropdownButton
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-1"
                  >
                    <Form.Group className="mb-3" controlId="formBreakfast">
                      <Form.Label>Breakfast_included</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control
                          type="text"
                          placeholder="Breakfast_included..."
                        />
                      </InputGroup>
                      <Form.Text id="formBreakfastMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGym">
                      <Form.Label>Gym</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control type="text" placeholder="Gym..." />
                      </InputGroup>
                      <Form.Text id="formGymMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formInternett">
                      <Form.Label>Internett</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control type="text" placeholder="Internett..." />
                      </InputGroup>
                      <Form.Text id="formInternettMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formParking">
                      <Form.Label>Parking_available</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control type="text" placeholder="Parking..." />
                      </InputGroup>
                      <Form.Text id="formParkingMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPet">
                      <Form.Label>Pet_friendly</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control type="text" placeholder="Pet..." />
                      </InputGroup>
                      <Form.Text id="formPetMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPool">
                      <Form.Label>Pool</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control type="text" placeholder="Pool..." />
                      </InputGroup>
                      <Form.Text id="formPoolMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formResturant">
                      <Form.Label>Resturant</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control type="text" placeholder="Resturant..." />
                      </InputGroup>
                      <Form.Text id="formResturantMessage" muted></Form.Text>
                    </Form.Group>
                  </DropdownButton>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAttractions">
                  <Form.Label>Attractions</Form.Label>
                  <DropdownButton
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-1"
                  >
                    <Form.Group className="mb-3" controlId="formFloyen">
                      <Form.Label>Floyen</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control type="text" placeholder="Floyen..." />
                      </InputGroup>
                      <Form.Text id="formFloyenMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMuseum">
                      <Form.Label>Edvard Grieg Museum Troldhaugen</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control type="text" placeholder="Museum..." />
                      </InputGroup>
                      <Form.Text id="formMuseumMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLysverket">
                      <Form.Label>Lysverket</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control type="text" placeholder="Lysverket..." />
                      </InputGroup>
                      <Form.Text id="formLysverketMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSjobadt">
                      <Form.Label>Nordnes_sjobad</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control type="text" placeholder="Sjobadt..." />
                      </InputGroup>
                      <Form.Text id="formSjobadtMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formFjordsightseeing"
                    >
                      <Form.Label>Fjordsightseeing</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control
                          type="text"
                          placeholder="Fjordsightseeing..."
                        />
                      </InputGroup>
                      <Form.Text
                        id="formFjordsightseeingMessage"
                        muted
                      ></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSkostredet">
                      <Form.Label>Skostredet</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <Form.Control type="text" placeholder="Skostredet..." />
                      </InputGroup>
                      <Form.Text id="formSkostredetMessage" muted></Form.Text>
                    </Form.Group>
                  </DropdownButton>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={CreateEstablishment}
                >
                  Submit
                </Button>{" "}
                <Container id="addMessageContainer"></Container>
              </Form>
            </Col>{" "}
          </Row>
        </Container>
        <AdminFooter />
      </>
    );
  } else {
    return (
      <>
        <AdminNavbar />
        <Container className="clear-header min-height">
          <Heading title={"Enquiries"} />
          <p>You are not logged in!</p>
          <Button variant="primary" href="/admin">
            Login
          </Button>
        </Container>
        <AdminFooter />
      </>
    );
  }
}
