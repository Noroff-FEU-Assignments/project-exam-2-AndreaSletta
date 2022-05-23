import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import { getToken } from "../../admin/utils/Storage";
import { Row, Col, Button, Container, Tab, Nav } from "react-bootstrap";
import { format } from "date-fns";
import CloseTab from "../../adminEnquiries/utils/CloseTab";
const token = getToken();

const url = BASE_URL + "messages";

export default function GetMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await axios.get(`${BASE_URL}messages`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            setMessages(response.data.data);
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
    return (
      <div className="text-warning">
        <p>An error occured: {error}</p>{" "}
        <p>Your session might have expired. Try logging out and in again!</p>
      </div>
    );
  }

  return (
    <Tab.Container id="left-tabs-example">
      <Row className="tab-row d-flex pt-3 pb-5">
        <Col className="pe-lg-4">
          <Nav variant="pills" className="flex-column">
            {messages.map(message => {
              var date = new Date(message.attributes.publishedAt);
              var formattedDate = format(date, "hh:mm a dd. MMMM yyyy");
              return (
                <Nav.Item key={message.id}>
                  <Nav.Link eventKey={message.id}>
                    <Row xs={1}>
                      <Col>
                        <Row xs={2} className="pb-3">
                          <Col>{message.attributes.subject}</Col>
                          <Col className="small-text">{formattedDate}</Col>
                        </Row>
                      </Col>
                      <Col>{message.attributes.message.slice(0, 100)}...</Col>
                    </Row>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Col>
        <Col className="ps-lg-4">
          <Tab.Content>
            {messages.map(message => {
              var date = new Date(message.attributes.publishedAt);
              var formattedDate = format(date, "hh:mm a dd. MMMM yyyy");
              return (
                <Tab.Pane
                  eventKey={message.id}
                  key={message.id}
                  id={message.id}
                  className="shadow"
                >
                  <Row xs={1} className="pb-4 pt-1">
                    <Col className="d-flex">
                      <Button
                        onClick={() =>
                          CloseTab(
                            "left-tabs-example-tabpane-" + message.id,
                            "left-tabs-example-tab-" + message.id
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
                        {message.attributes.name}
                      </p>
                    </Col>
                    <Col className="px-4">
                      <p>
                        <span className="fw-bolder">Email: </span>:
                        {message.attributes.email}
                      </p>
                    </Col>
                    <Col className="px-4">
                      <p>
                        <span className="fw-bolder">Subject: </span>
                        {message.attributes.subject}
                      </p>
                    </Col>
                    <Col className="px-4 pb-3">
                      {" "}
                      {message.attributes.message}
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
