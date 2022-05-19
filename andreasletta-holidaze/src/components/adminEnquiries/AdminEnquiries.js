import { getUsername } from "../admin/utils/Storage";
import { Container, Breadcrumb } from "react-bootstrap";
import AdminNavbar from "../layout/AdminNavbar";
import Heading from "../layout/Heading";
import AdminFooter from "../layout/AdminFooter";
import GetEnguiries from "./utils/GetEnguiries";

const username = getUsername();

export default function AdminEnquiries() {
  if (username) {
    return (
      <>
        <AdminNavbar />

        <Container className="clear-header">
          <Breadcrumb>
            <Breadcrumb.Item href="/admin">Admin</Breadcrumb.Item>
            <Breadcrumb.Item active>Enquiries</Breadcrumb.Item>
          </Breadcrumb>
          <Heading title={"Enquiries"} />
          <GetEnguiries />
        </Container>
        <AdminFooter />
      </>
    );
  } else {
    return <>please log in</>;
  }
}
