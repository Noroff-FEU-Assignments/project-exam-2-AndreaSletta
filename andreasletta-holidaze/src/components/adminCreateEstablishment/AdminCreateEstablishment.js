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
          <Row xs={1} className="pt-2 pb-5">
            <Col>
              <Form className="form">
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
                  <Form.Label>Image 1</Form.Label>
                  <Form.Control type="url" placeholder="Image url..." />
                  <Form.Text id="formImage1Message" muted></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImage2">
                  <Form.Label>Image 2</Form.Label>
                  <Form.Control type="url" placeholder="Image url..." />
                  <Form.Text id="formImage2Message" muted></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImage3">
                  <Form.Label>Image 3</Form.Label>
                  <Form.Control type="url" placeholder="Image url..." />
                  <Form.Text id="formImage3Message" muted></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFacilities">
                  <Form.Label>Facilities</Form.Label>
                  <DropdownButton
                    variant="outline-primary"
                    title="Pick multiple"
                    id="input-group-dropdown-1"
                    className="text-muted"
                  >
                    <Form.Group className="mb-2" controlId="formBreakfast">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>
                      <Form.Label>Breakfast included</Form.Label>

                      <Form.Text id="formBreakfastMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formGym">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>
                      <Form.Label>Gym</Form.Label>

                      <Form.Text id="formGymMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formInternett">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>
                      <Form.Label>Internett</Form.Label>

                      <Form.Text id="formInternettMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formParking">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>
                      <Form.Label>Parking available</Form.Label>

                      <Form.Text id="formParkingMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formPet">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>
                      <Form.Label>Pet friendly</Form.Label>

                      <Form.Text id="formPetMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formPool">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>
                      <Form.Label>Pool</Form.Label>

                      <Form.Text id="formPoolMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formResturant">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>
                      <Form.Label>Resturant</Form.Label>

                      <Form.Text id="formResturantMessage" muted></Form.Text>
                    </Form.Group>
                  </DropdownButton>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAttractions">
                  <Form.Label>Attractions</Form.Label>
                  <DropdownButton
                    variant="outline-primary"
                    title="Pick multiple"
                    id="input-group-dropdown-1"
                  >
                    <Form.Group className="mb-2" controlId="formFloyen">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>{" "}
                      <Form.Label>Floyen</Form.Label>
                      <Form.Text id="formFloyenMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formMuseum">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>{" "}
                      <Form.Label>Edvard Grieg Museum Troldhaugen</Form.Label>
                      <Form.Text id="formMuseumMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formLysverket">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>
                      <Form.Label>Lysverket</Form.Label>

                      <Form.Text id="formLysverketMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formSjobadt">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>
                      <Form.Label>Nordnes sjobad</Form.Label>

                      <Form.Text id="formSjobadtMessage" muted></Form.Text>
                    </Form.Group>

                    <Form.Group
                      className="mb-2"
                      controlId="formFjordsightseeing"
                    >
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>
                      <Form.Label>Fjordsightseeing</Form.Label>

                      <Form.Text
                        id="formFjordsightseeingMessage"
                        muted
                      ></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formSkostredet">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup>
                      <Form.Label>Skostredet</Form.Label>

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
                <Container
                  id="addMessageContainer"
                  className="m-0 px-0 py-4"
                ></Container>
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
