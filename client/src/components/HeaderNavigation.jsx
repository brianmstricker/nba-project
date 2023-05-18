import { Nav, Navbar } from "react-bootstrap";
import useFantasyTeamStore from "../store/fantasyTeam";
import { useState, useEffect } from "react";
import useUserStore from "../store/userStore";

const HeaderNavigation = () => {
  const [username, setUsername] = useState(null);
  const token = useUserStore((state) => state.token);
  const user = useUserStore((state) => state.user);
  useEffect(() => {
    if (token) {
      setUsername(user.username);
    }
  }, [token, user]);
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
          {user && <p className="text-white text">{username}</p>}
        </div>
        <div className="d-flex flew-row gap-4">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex flex-row align-items-center gap-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create-player">Add Player Entry</Nav.Link>
              <Nav.Link href="/fantasy-team">
                Fantasy Team | Count:{" "}
                {useFantasyTeamStore((state) => state.fantasyTeam.length)}
              </Nav.Link>
              {!user ? (
                <>
                  <Nav.Link href="/register">Register</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>
              ) : (
                <Nav.Link href="/logout">Logout</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderNavigation;
