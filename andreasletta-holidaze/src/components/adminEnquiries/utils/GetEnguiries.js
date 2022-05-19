import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import { getToken, getUsername } from "../../admin/utils/Storage";
import { Row, ListGroup, Col, Card, Button, Accordion } from "react-bootstrap";
import { format } from "date-fns";
const token = getToken();

const username = getUsername();

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
    return <div className="text-info">Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div className="text-warning">An error occured: {error}</div>;
  }
  console.log(enquiries);

  return (
    <ListGroup className="pb-5 pt-3">
      <Row xs={1}>
        {enquiries.map(inquiry => {
          var date = new Date(inquiry.attributes.publishedAt);
          var formattedDate = format(date, "hh:mm a dd. MMMM yyyy");
          return (
            <Accordion key={inquiry.id}>
              <Accordion.Item eventKey={inquiry.id}>
                <Accordion.Header>
                  <Row xs={1}>
                    <Col>
                      <Row xs={2} className="pb-3">
                        <Col>{inquiry.attributes.subject}</Col>
                        <Col>{formattedDate}</Col>
                      </Row>
                    </Col>
                    <Col>{inquiry.attributes.message.slice(0, 100)}...</Col>
                  </Row>
                </Accordion.Header>
                <Accordion.Body>
                  <Row xs={1}>
                    <Col> {formattedDate}</Col>
                    <Col>
                      <p>
                        <span className="fw-bolder">Name: </span>
                        {inquiry.attributes.name}
                      </p>
                    </Col>
                    <Col>
                      <p>
                        {" "}
                        <span className="fw-bolder">Email: </span>:{" "}
                        {inquiry.attributes.email}
                      </p>{" "}
                    </Col>
                    <Col>
                      <p>
                        <span className="fw-bolder">Subject: </span>
                        {inquiry.attributes.subject}
                      </p>
                    </Col>
                    <Col> {inquiry.attributes.message}</Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </Row>
    </ListGroup>
  );
}
