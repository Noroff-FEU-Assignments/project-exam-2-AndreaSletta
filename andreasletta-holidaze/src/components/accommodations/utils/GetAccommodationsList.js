import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

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

  const HotelCheck = document.querySelector("#Hotel");

  //
  function CheckBox3() {
    const initialList = [accommodations];

    const [list, setList] = useState(initialList);
    console.log(list);
    const clickhandler = ({ target }) => {
      const { checked, id } = target;
      setList(prev => {
        const clickedItem = prev.find(item => item.id.toString() === id);
        clickedItem["checked"] = checked;
        console.log(clickedItem);
        return [...prev];
      });
    };

    return (
      <>
        <ListGroup>
          <Row xs={1} md={2} lg={4}>
            {initialList[0].map(accommodation => {
              return (
                <Col key={accommodation.id} className="p-0">
                  <ListGroup.Item>
                    <Link
                      className="link-info"
                      to={`/accommodations/${accommodation.id}`}
                    >
                      <Card>
                        <Card.Img
                          variant="top"
                          src={
                            accommodation.attributes.images.data[0].attributes
                              .url
                          }
                        />
                        <Card.Body>
                          <Card.Title>
                            {" "}
                            {accommodation.attributes.name}
                          </Card.Title>
                          <Card.Text>
                            {" "}
                            <i className="bi bi-house"></i>
                            {accommodation.attributes.type}
                          </Card.Text>
                          <Card.Text>
                            {accommodation.attributes.description.slice(0, 100)}
                            ...
                          </Card.Text>
                          <Button variant="primary">Read more</Button>
                        </Card.Body>
                      </Card>
                    </Link>
                  </ListGroup.Item>
                </Col>
              );
            })}
          </Row>
        </ListGroup>
      </>
    );
  }
  //
  return <CheckBox3 />;
  /*
  return (
    <>
      <ListGroup>
        <Row xs={1} md={2} lg={4}>
          {accommodations.map(accommodation => {
            const facilities = accommodation.attributes.facilities[0];

            if (facilities.Breakfast_included === true) {
              console.log("hi");
            }
            return (
              <Col key={accommodation.id} className="p-0">
                <ListGroup.Item>
                  <Link
                    className="link-info"
                    to={`/accommodations/${accommodation.id}`}
                  >
                    <Card>
                      <Card.Img
                        variant="top"
                        src={
                          accommodation.attributes.images.data[0].attributes.url
                        }
                      />
                      <Card.Body>
                        <Card.Title>
                          {" "}
                          {accommodation.attributes.name}
                        </Card.Title>
                        <Card.Text>
                          {" "}
                          <i className="bi bi-house"></i>
                          {accommodation.attributes.type}
                        </Card.Text>
                        <Card.Text>
                          {accommodation.attributes.description.slice(0, 100)}
                          ...
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                      </Card.Body>
                    </Card>
                  </Link>
                </ListGroup.Item>
              </Col>
            );
          })}
        </Row>
      </ListGroup>
    </>
  );*/
}

export default GetAccommodationsList;
