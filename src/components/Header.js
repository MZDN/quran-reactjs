import React, { Component } from 'react';
//import { Navbar, Nav, Form, FormControl,Button} from 'react-bootstrap';
import { Navbar, Nav} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">QURAN KITABULLAH</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home"></Nav.Link>
        <Nav.Link href="#features"></Nav.Link>
        <Nav.Link href="#pricing"></Nav.Link>
      </Nav>
      {/*<Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>*/}
    </Navbar>
    );
  }
}


export default Header;