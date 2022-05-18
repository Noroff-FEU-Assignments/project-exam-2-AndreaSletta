import { Form, Button } from "react-bootstrap";
import login from "../utils/Login";
import room from "../../../images/room.jpg";

export default function LoginForm() {
  console.log(room);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="inputEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="inputPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button
        className="mb-5 mb-md-0 mb-lg-0"
        variant="outline-primary"
        type="submit"
        onClick={login}
      >
        Submit
      </Button>
    </Form>
  );
}
