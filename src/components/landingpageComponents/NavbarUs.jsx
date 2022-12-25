import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

function NavbarUs() {
  return (
    <div className="container-fluid p-0">
      <Navbar className="navbar navbar-expand-sm navbar-dark " expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-aut">
              <Nav.Link href="#home" className="text-white link bg-transparent">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white link bg-transparent">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white link bg-transparent">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarUs;
