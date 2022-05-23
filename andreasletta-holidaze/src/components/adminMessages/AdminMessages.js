import { getUsername } from "../admin/utils/Storage";
import { Container, Breadcrumb, Button } from "react-bootstrap";
import AdminNavbar from "../layout/AdminNavbar";
import Heading from "../layout/Heading";
import AdminFooter from "../layout/AdminFooter";
import GetMessages from "./utils/GetMessages";

const username = getUsername();

export default function AdminMessages() {
  if (username) {
    return (
      <>
        <AdminNavbar />
        <Container className="clear-header">
          <Breadcrumb>
            <Breadcrumb.Item href="/admin">Admin</Breadcrumb.Item>
            <Breadcrumb.Item active>Messages</Breadcrumb.Item>
          </Breadcrumb>
          <Heading title={"Messages"} />
          <GetMessages />
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
        </Container>{" "}
        <AdminFooter />
      </>
    );
  }
}
