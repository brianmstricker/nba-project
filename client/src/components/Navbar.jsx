import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { FantasyTeamContext } from "../main";
import { useContext } from "react";

const NavBar = () => {
  const [fantasyTeam] = useContext(FantasyTeamContext);
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container className="mx-auto">
        <Row>
          <Navbar.Brand style={{ fontSize: "2rem" }} href="/">
            Fantasy Basketball
          </Navbar.Brand>
        </Row>
        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex flex-row align-items-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create-player">Create Player</Nav.Link>
              <div className="text-danger">Cart {fantasyTeam.length}</div>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
