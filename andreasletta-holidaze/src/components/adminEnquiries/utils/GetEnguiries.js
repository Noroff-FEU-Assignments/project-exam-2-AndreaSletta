import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import { getToken } from "../../admin/utils/Storage";
import { Row, Col, Button, Container, Tab, Nav } from "react-bootstrap";
import CloseTab from "../utils/CloseTab";

import { format } from "date-fns";

const token = getToken();

const url = BASE_URL + "enquiries";

export default function GetEnguiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await axios.get(`${BASE_URL}enquiries`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            setEnquiries(response.data.data);
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
    console.log(error);
    return <div className="text-warning">An error occured: {error}</div>;
  }

  //close tab

  return (
    <Tab.Container id="left-tabs-example">
      <Row className="tab-row d-flex pt-3 pb-5">
        <Col className="pe-lg-4">
          <Nav variant="pills" className="flex-column">
            {enquiries.map(inquiry => {
              var date = new Date(inquiry.attributes.publishedAt);
              var formattedDate = format(date, "hh:mm a dd. MMMM yyyy");
              return (
                <Nav.Item key={inquiry.id}>
                  <Nav.Link eventKey={inquiry.id}>
                    <Row xs={1}>
                      <Col>
                        <Row xs={2} className="pb-3">
                          <Col>{inquiry.attributes.subject}</Col>
                          <Col className="small-text">{formattedDate}</Col>
                        </Row>
                      </Col>
                      <Col>{inquiry.attributes.message.slice(0, 100)}...</Col>
                    </Row>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Col>
        <Col className="ps-lg-4">
          <Tab.Content>
            {enquiries.map(inquiry => {
              var date = new Date(inquiry.attributes.publishedAt);
              var formattedDate = format(date, "hh:mm a dd. MMMM yyyy");
              return (
                <Tab.Pane
                  eventKey={inquiry.id}
                  key={inquiry.id}
                  id={inquiry.id}
                  className="shadow"
                >
                  <Row xs={1} className="pb-4 pt-1">
                    <Col className="d-flex">
                      <Button
                        onClick={() =>
                          CloseTab(
                            "left-tabs-example-tabpane-" + inquiry.id,
                            "left-tabs-example-tab-" + inquiry.id
                          )
                        }
                      >
                        <i className="fa fa-solid fa-angle-left pe-2"></i>
                        Back
                      </Button>
                      <p className="small-text"> {formattedDate}</p>
                    </Col>
                    <Col className="px-4 pt-3">
                      <p>
                        <span className="fw-bolder">Name: </span>
                        {inquiry.attributes.name}
                      </p>
                    </Col>
                    <Col className="px-4">
                      <p>
                        <span className="fw-bolder">Email: </span>:
                        {inquiry.attributes.email}
                      </p>
                    </Col>
                    <Col className="px-4">
                      <p>
                        <span className="fw-bolder">Subject: </span>
                        {inquiry.attributes.subject}
                      </p>
                    </Col>
                    <Col className="px-4 pb-3">
                      {" "}
                      {inquiry.attributes.message}
                    </Col>
                  </Row>
                </Tab.Pane>
              );
            })}{" "}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
