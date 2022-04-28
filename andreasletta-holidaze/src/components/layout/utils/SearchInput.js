import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import { ListGroup, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SearchInput() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let initialList = [];

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

  function RenderContent() {
    let data = "";

    if (initialList.length === 0) {
      // console.log(initialList.length, "no content");
      data = <p className="text-info">no content</p>;
    } else if (initialList.length > 0) {
      console.log(initialList.length, "content");
      data = <p className="text-info">content</p>;
      if (initialList[0].length === 0) {
        console.log(initialList[0], initialList[0].length, "no content");
        data = <p>hi</p>;
        console.log(data);
        return <p className="text-info">no content</p>;
      }

      if (initialList[0].length === 1) {
        console.log(initialList[0][0], initialList[0].length, "with 1 item");
        data = (
          <ListGroup id="searchResult">
            <Row xs={1}>
              <Col
                className="p-0"
                id={initialList[0][0].id}
                key={initialList[0][0].id}
              >
                <ListGroup.Item>
                  <Link
                    className="link-info"
                    to={`/accommodations/${initialList[0][0].id}`}
                  >
                    <Row>
                      <Col className="col-4">
                        <Card.Img
                          variant="top"
                          src={
                            initialList[0][0].attributes.images.data[0]
                              .attributes.url
                          }
                        />
                      </Col>
                      <Col className="col-8">
                        <Row xs={1}>
                          <Col>
                            {" "}
                            <Card.Title>
                              {" "}
                              {initialList[0][0].attributes.name}
                            </Card.Title>
                          </Col>

                          <Col>
                            <Card.Text>
                              {" "}
                              <i className="bi bi-house"></i>
                              {initialList[0][0].attributes.type}
                            </Card.Text>
                          </Col>
                          <Col>
                            <Card.Text>
                              {initialList[0][0].attributes.description.slice(
                                0,
                                100
                              )}
                              ...
                            </Card.Text>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Link>
                </ListGroup.Item>
              </Col>
            </Row>
          </ListGroup>
        );
      }
      if (initialList[0].length > 1) {
        console.log(initialList[0], initialList[0].length, "with many items");
        data = (
          <ListGroup id="searchResult">
            <Row xs={1}>
              {initialList[0].map(accommodation => {
                return (
                  <Col
                    className="p-0"
                    id={accommodation.id}
                    key={accommodation.id}
                  >
                    <ListGroup.Item>
                      <Link
                        className="link-info"
                        to={`/accommodations/${accommodation.id}`}
                      >
                        <Row>
                          <Col className="col-4">
                            <Card.Img
                              variant="top"
                              src={
                                accommodation.attributes.images.data[0]
                                  .attributes.url
                              }
                            />
                          </Col>
                          <Col className="col-8">
                            <Row xs={1}>
                              <Col>
                                {" "}
                                <Card.Title>
                                  {" "}
                                  {accommodation.attributes.name}
                                </Card.Title>
                              </Col>

                              <Col>
                                <Card.Text>
                                  {" "}
                                  <i className="bi bi-house"></i>
                                  {accommodation.attributes.type}
                                </Card.Text>
                              </Col>
                              <Col>
                                <Card.Text>
                                  {accommodation.attributes.description.slice(
                                    0,
                                    100
                                  )}
                                  ...
                                </Card.Text>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Link>
                    </ListGroup.Item>
                  </Col>
                );
              })}
            </Row>
          </ListGroup>
        );
      }
      return data;
    }
    /*
    if (initialList[0].length === 0) {
      console.log(initialList[0], initialList[0].length, "no content");
      return <p className="text-info">no content</p>;
    }

    if (initialList[0].length === 1) {
      console.log(initialList[0][0], initialList[0].length, "with 1 item");
      data = (
        <ListGroup id="searchResult">
          <Row xs={1}>
            <Col
              className="p-0"
              id={initialList[0][0].id}
              key={initialList[0][0].id}
            >
              <ListGroup.Item>
                <Link
                  className="link-info"
                  to={`/accommodations/${initialList[0][0].id}`}
                >
                  <Row>
                    <Col className="col-4">
                      <Card.Img
                        variant="top"
                        src={
                          initialList[0][0].attributes.images.data[0].attributes
                            .url
                        }
                      />
                    </Col>
                    <Col className="col-8">
                      <Row xs={1}>
                        <Col>
                          {" "}
                          <Card.Title>
                            {" "}
                            {initialList[0][0].attributes.name}
                          </Card.Title>
                        </Col>

                        <Col>
                          <Card.Text>
                            {" "}
                            <i className="bi bi-house"></i>
                            {initialList[0][0].attributes.type}
                          </Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>
                            {initialList[0][0].attributes.description.slice(
                              0,
                              100
                            )}
                            ...
                          </Card.Text>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Link>
              </ListGroup.Item>
            </Col>
          </Row>
        </ListGroup>
      );
    }
    if (initialList[0].length > 1) {
      console.log(initialList[0], initialList[0].length, "with many items");
      data = (
        <ListGroup id="searchResult">
          <Row xs={1}>
            {initialList[0].map(accommodation => {
              return (
                <Col
                  className="p-0"
                  id={accommodation.id}
                  key={accommodation.id}
                >
                  <ListGroup.Item>
                    <Link
                      className="link-info"
                      to={`/accommodations/${accommodation.id}`}
                    >
                      <Row>
                        <Col className="col-4">
                          <Card.Img
                            variant="top"
                            src={
                              accommodation.attributes.images.data[0].attributes
                                .url
                            }
                          />
                        </Col>
                        <Col className="col-8">
                          <Row xs={1}>
                            <Col>
                              {" "}
                              <Card.Title>
                                {" "}
                                {accommodation.attributes.name}
                              </Card.Title>
                            </Col>

                            <Col>
                              <Card.Text>
                                {" "}
                                <i className="bi bi-house"></i>
                                {accommodation.attributes.type}
                              </Card.Text>
                            </Col>
                            <Col>
                              <Card.Text>
                                {accommodation.attributes.description.slice(
                                  0,
                                  100
                                )}
                                ...
                              </Card.Text>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Link>
                  </ListGroup.Item>
                </Col>
              );
            })}
          </Row>
        </ListGroup>
      );
    }
*/
    //console.log(data);
    return data;
  }

  function search() {
    const searchInput = document.querySelector("#search-input");
    const searchInputValue = searchInput.value.trim().toLowerCase();
    const filteredAccommodations = accommodations.filter(function (
      accommodation
    ) {
      if (
        accommodation.attributes.name
          .toLowerCase()
          .includes(searchInputValue) ||
        accommodation.attributes.description
          .toLowerCase()
          .includes(searchInputValue)
      ) {
        return true;
      }
    });
    initialList = filteredAccommodations;

    //console.log(accommodations, initialList, filteredAccommodations);

    RenderContent();
  }

  return (
    <>
      <Row xs={1}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Søk..."
          aria-label="Search"
          id="search-input"
          onKeyUp={search}
        />
        <RenderContent />
      </Row>
    </>
  );
}
