import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return ( 
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text>
            <a href="/addRecipt">Add Recipt</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href="/">Home</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}

export default NavBar
