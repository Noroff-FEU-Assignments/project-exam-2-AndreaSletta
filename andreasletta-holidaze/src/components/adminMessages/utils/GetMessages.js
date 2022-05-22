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
    return <div className="text-warning">An error occured: {error}</div>;
  }

  return (
    <Tab.Container id="left-tabs-example">
      <Row className="tab-row d-flex pt-3 pb-5">
        <Col>
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
                          <Col>{formattedDate}</Col>
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
        <Col>
          <Tab.Content>
            {messages.map(message => {
              var date = new Date(message.attributes.publishedAt);
              var formattedDate = format(date, "hh:mm a dd. MMMM yyyy");
              return (
                <Tab.Pane
                  eventKey={message.id}
                  key={message.id}
                  id={message.id}
                >
                  <Button
                    onClick={() =>
                      CloseTab(
                        "left-tabs-example-tabpane-" + message.id,
                        "left-tabs-example-tab-" + message.id
                      )
                    }
                    className="d-md-none"
                  >
                    {" "}
                    <i className="fa fa-solid fa-angle-left pe-2"></i>
                    Back
                  </Button>
                  <Row xs={1} className="shadow">
                    <Col> {formattedDate}</Col>
                    <Col>
                      <p>
                        <span className="fw-bolder">Name: </span>
                        {message.attributes.name}
                      </p>
                    </Col>
                    <Col>
                      <p>
                        {" "}
                        <span className="fw-bolder">Email: </span>:{" "}
                        {message.attributes.email}
                      </p>{" "}
                    </Col>
                    <Col>
                      <p>
                        <span className="fw-bolder">Subject: </span>
                        {message.attributes.subject}
                      </p>
                    </Col>
                    <Col> {message.attributes.message}</Col>
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
