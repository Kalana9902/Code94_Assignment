import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {

  //mannual page refersh funtion
  const Refresh= ()=>{
    window.location.reload()
  }

    return ( 
      <Navbar bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary">
      <Container style={{display: 'flex', justifyContent:"space-between"}}>
        <div>
        <Navbar.Brand href="/">Recipes Manager</Navbar.Brand>
        
        </div>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
          <Nav.Link className='btn btn-success' style={{fontWeight: 'bold'}} href="/addRecipt">Add Recipe +</Nav.Link>
            <Nav.Link onClick={() => Refresh()} className='btn btn-success' style={{fontWeight: 'bold'}}>Refresh Page</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
     );
}

export default NavBar
