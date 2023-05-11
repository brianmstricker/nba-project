import { Nav, Navbar } from "react-bootstrap";
import { FantasyTeamContext } from "../main";
import { useContext } from "react";

const NavBar = () => {
  const [fantasyTeam] = useContext(FantasyTeamContext);
  return (
    <div>
      <Navbar
        variant="dark"
        bg="dark"
        expand="lg"
        className="w-100 px-5 d-flex flex-row justify-content-between"
      >
        <div>
          <Navbar.Brand style={{ fontSize: "2rem" }} href="/">
            Fantasy Basketball
          </Navbar.Brand>
        </div>
        <div className="d-flex flew-row gap-4">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex flex-row align-items-center gap-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create-player">Create Player</Nav.Link>
              <div className="text-danger">Players: {fantasyTeam.length}</div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
