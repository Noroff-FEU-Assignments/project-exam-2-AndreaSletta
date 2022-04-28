import { getUsername } from "../admin/utils/Storage";
import { Container } from "react-bootstrap";
import AdminNavbar from "../layout/AdminNavbar";
import Heading from "../layout/Heading";
import AdminFooter from "../layout/AdminFooter";

const username = getUsername();

export default function AdminCreateEstablishment() {
  if (username) {
    return (
      <>
        <AdminNavbar />
        <Container className="clear-header">
          <Heading title={"Create a new establishment"} />
        </Container>
        <AdminFooter />
      </>
    );
  } else {
    return <>please log in</>;
  }
}
