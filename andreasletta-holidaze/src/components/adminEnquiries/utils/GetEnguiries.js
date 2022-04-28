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
    <ListGroup>
      <Row xs={1} md={2} lg={4}>
        {enquiries.map(inquiry => {
          var date = new Date(inquiry.attributes.publishedAt);
          var formattedDate = format(date, "dd MMMM yyyy ");
          console.log(formattedDate);
          return (
            <Accordion key={inquiry.id}>
              <Accordion.Item eventKey={inquiry.id}>
                <Row xs={2}>
                  <Col>{inquiry.attributes.subject}</Col>
                  <Col>{inquiry.attributes.publishedAt}</Col>
                </Row>
                <Accordion.Header>
                  {inquiry.attributes.message.slice(0, 100)}...
                </Accordion.Header>
                <Accordion.Body>{inquiry.attributes.message}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </Row>
    </ListGroup>
  );
}
