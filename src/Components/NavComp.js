import {Nav, Navbar, Container} from 'react-bootstrap';  
const NavComp = () => {  
  return ( 
    <div className='navbarcomp py-4 d-flex justify-content-center align-items-center w-100'>
        <Navbar variant={'dark'} expand="sm" className='w-100  h4'   style={{ fontFamily: "QuickSand"}}>
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className='m-auto gap-3'>
                    <Nav.Link className='linkto' href='/'>Home</Nav.Link>
                    <Nav.Link className='linkto' href='/'>Education & Skills</Nav.Link>
                    <Nav.Link className='linkto' href='/'>Projects</Nav.Link>
                    <Nav.Link className='linkto' href='about'>About</Nav.Link>
                    <Nav.Link className='linkto' href='/'>Contact</Nav.Link>
                </Nav> 
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );  
}  
export default NavComp;  