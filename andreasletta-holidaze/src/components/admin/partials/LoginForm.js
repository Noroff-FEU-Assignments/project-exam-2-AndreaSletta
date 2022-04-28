import { Form, Button } from "react-bootstrap";
import login from "../utils/Login";

export default function LoginForm() {
  return (
    <Form className="pt-5 mt-5">
      <Form.Group className="mb-3" controlId="inputEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="inputPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={login}>
        Submit
      </Button>
    </Form>
  );
}
