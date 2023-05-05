import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const CreatePlayer = () => {
  return (
    <Container className="h-100 w-50 d-flex flex-column justify-content-center">
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default CreatePlayer;
