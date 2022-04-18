import { Container } from "react-bootstrap";
import GetTopPics from "../utils/GetTopPics";
function TopPicks() {
  return (
    <Container className="p-0">
      <h2>Our top picks</h2>
      <GetTopPics />
    </Container>
  );
}

export default TopPicks;
