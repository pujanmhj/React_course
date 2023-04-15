import React from 'react'
import Nab from '../Lib/Menu'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

 function NavBar() 
{
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container fluid>
      <Navbar.Brand href="/" Navbar scroll>Movie Npl</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      {
        Nab.map((menu,key)=>{
          return(
            <div>
              {
                menu.subname.length === 0 ?
                  <Nav.Link key={key} href={menu.path}>{menu.name}</Nav.Link>
                :
                <NavDropdown key={key} title={menu.name} id="navbarScrollingDropdown">
                  {
                    menu.subname.map((menu2,key2)=>{
                      return(
                        <div>
                          <NavDropdown.Item key={`${key2}`} href={`${menu2.path}`}>{menu2.name}</NavDropdown.Item>
                          {
                            menu.subname -1 !== key2 &&
                               <NavDropdown.Divider />
                          }
                        </div>
                      )
                    })
                  }
                  </NavDropdown>
              }
            </div>
          )
        })
      }
    </Nav>
         <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
       </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
   
  )
}
export default NavBar