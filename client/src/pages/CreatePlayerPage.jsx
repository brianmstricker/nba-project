import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";

const DEFAULT_FORM = {
  name: "",
  position: "",
  number: 0,
};
const CreatePlayerPage = () => {
  const [form, setForm] = useState(DEFAULT_FORM);
  const updateFormValue = (key) => (e) => {
    setForm({ ...form, [key]: e.currentTarget.value });
  };
  const createPlayer = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/players", form);
    setForm(DEFAULT_FORM);
  };
  return (
    <Container className="h-100 w-50 d-flex flex-column justify-content-center">
      <Row>
        <Form onSubmit={createPlayer}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={form.name}
              onChange={updateFormValue("name")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              value={form.position}
              onChange={updateFormValue("position")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNumber">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              value={form.number}
              onChange={updateFormValue("number")}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
export default CreatePlayerPage;
