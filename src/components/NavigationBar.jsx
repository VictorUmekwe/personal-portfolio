import {Nav, Container, Navbar, } from 'react-bootstrap';


// Remember to animate the website 
const NavigationBar = () => {
  return (
    <Navbar expand='lg' className=' bg-primary w-100 fixed-top z-1' data-bs-theme='dark'>
      <Container >
          <Navbar.Brand href='#home' className='fs-4 fw-bold' >
            Victor <span className=' text-dark'>U</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className=' me-auto d-flex w-100 justify-content-end text-center'>
              <Nav.Link href='#hero'>Home</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#projects'>Projects</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default NavigationBar