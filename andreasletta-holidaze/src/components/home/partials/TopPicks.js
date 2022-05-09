import { Container } from "react-bootstrap";
import GetTopPics from "../utils/GetTopPics";
function TopPicks() {
  return (
    <Container className="py-5 top-picks px-4">
      <h2 className=" mx-md-4">Our top picks</h2>
      <GetTopPics />
    </Container>
  );
}

export default TopPicks;
