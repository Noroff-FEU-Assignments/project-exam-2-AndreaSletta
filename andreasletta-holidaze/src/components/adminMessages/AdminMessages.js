import { getUsername } from "../admin/utils/Storage";
import { Container } from "react-bootstrap";
import AdminNavbar from "../layout/AdminNavbar";
import Heading from "../layout/Heading";
import AdminFooter from "../layout/AdminFooter";

const username = getUsername();

export default function AdminMessages() {
  if (username) {
    console.log(username);
    return (
      <>
        <AdminNavbar />
        <Container className="clear-header">
          <Heading title={"Messages"} />
        </Container>
        <AdminFooter />
      </>
    );
  } else {
    return <>please log in</>;
  }
}
