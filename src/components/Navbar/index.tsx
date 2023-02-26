import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import { NavbarContainer } from './style';

function OffcanvasExample() {
  return (
    <NavbarContainer>
        <Navbar key='xxl' expand='xxl' className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">KITNETS DO ELIO</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xxl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#kitnets">NOSSOS KITNETS</Nav.Link>
                  <Nav.Link href="#regiao">A REGIÃO</Nav.Link>
                  <Nav.Link href="#sobre">SOBRE NÓS</Nav.Link>
                  <Link href="/formularioDeContato" as="contato">CONTATO</Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </NavbarContainer>
  );
}

export default OffcanvasExample;