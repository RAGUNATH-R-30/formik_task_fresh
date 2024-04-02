import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";
function TopNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{border:"1px solid grey"}}>
      <Container fluid>
        <Navbar.Brand href="#home">Book Shelf</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              All Books
            </Nav.Link>
            <Nav.Link as={Link} to={"/allauthors"}>All Authors</Nav.Link>
            <Nav.Link as={Link} to={"/createbook"}>Create Book</Nav.Link>
            <Nav.Link as={Link} to={"/createauthor"}>Create Author</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar>
  );
}

export default TopNavbar;
