import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";

const DEFAULT_FORM = {
  username: "",
  password: "",
};
const Register = () => {
  const [form, setForm] = useState(DEFAULT_FORM);
  const updateFormValue = (key) => (e) => {
    setForm({ ...form, [key]: e.currentTarget.value });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/register", form);
    setForm(DEFAULT_FORM);
  };
  return (
    <Container className="h-100 w-50 d-flex flex-column my-5">
      <div className="d-block m-4 mb-5">
        <h1 className="text-center">Create Account</h1>
      </div>
      <Row>
        <Form onSubmit={registerUser}>
          <Form.Group
            className="d-flex align-items-end mb-4 justify-content-center"
            controlId="formUsername"
          >
            <Form.Label style={{ marginRight: "3rem" }}>Username</Form.Label>
            <Form.Control
              style={{ width: "175px" }}
              type="text"
              value={form.username}
              onChange={updateFormValue("username")}
            />
          </Form.Group>
          <Form.Group
            className="d-flex align-items-end justify-content-center"
            controlId="formPassword"
          >
            <Form.Label style={{ marginRight: "3rem" }}>Password</Form.Label>
            <Form.Control
              style={{ width: "175px" }}
              type="password"
              value={form.password}
              onChange={updateFormValue("password")}
            />
          </Form.Group>
          <div className="d-flex justify-content-center mt-5">
            <Button
              variant="primary"
              type="submit"
              disabled={form.username.length == 0 || form.password.length == 0}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};
export default Register;
