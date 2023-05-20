import { Image, Nav, Navbar } from "react-bootstrap";
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
    <Navbar
      variant="dark"
      bg="dark"
      expand="lg"
      className="w-100 px-5 py-3 d-flex align-items-center justify-content-between"
    >
      <div>
        <Navbar.Brand style={{ fontSize: "2rem" }} href="/">
          <Image
            className="d-none d-sm-inline"
            style={{ width: "50px", height: "50px" }}
            src="../../images/Logo.svg"
          ></Image>
          Fantasy Basketball
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <div>
        <Navbar.Collapse id="responsive-navbar-nav">
          {user && (
            <div className="text-white me-3 mt-2 mt-md-0">
              Signed in as: {username}
            </div>
          )}
          <Nav className="">
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
  );
};

export default HeaderNavigation;
