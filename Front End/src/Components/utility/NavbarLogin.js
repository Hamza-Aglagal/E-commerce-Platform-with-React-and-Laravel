import React from 'react'
import { Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import user from '../../images/user.png'
import Admin from '../../images/Admin.png'
import shopping from '../../images/shopping-cart.png'
import Logo from '../../images/Logo.png'
import { useEffect } from 'react'
import { useState } from 'react'

const NavbarLogin = () => {


  const [bgNav, setbgNav] = useState()

  useEffect(() => {
    if(localStorage.getItem('Admin')){
      setbgNav('secondary')
    }
  }, [])
  

  


  return (
    <Row>

      <Navbar bg={bgNav? bgNav : 'dark'} expand="lg" >
        <Container>
          <Navbar.Brand className='text-light' href="/">
              <img className='Logo' src={Logo} />
          </Navbar.Brand>
          <Form>
            <Form.Control
              type="search"
              placeholder="Search"
              className="search"
              aria-label="Search"
            />
          </Form>

          {

            localStorage.getItem('Admin') ?
              <Nav.Link href='/admin/allproducts'
                className='text-light d-flex'>
                <img className='icon-navbar' src={Admin} />
                <p> Admin </p>
              </Nav.Link> :

              (localStorage.getItem('Client') ?
                <Nav.Link href='/cart' className='text-light d-flex'>
                  <img className='icon-navbar' src={shopping} />
                  <p> العربة  </p>
                </Nav.Link> :
                <Nav.Link href='/login'
                  className='text-light d-flex'>
                  <img className='icon-navbar'  src={user}   />
                  <p> التسجيل </p>
                </Nav.Link>)
          }

          {
            localStorage.getItem('Client') &&
            <div
              style={{ width: '3rem', height: '3rem' }}
              className='text-light d-flex justify-content-between align-items-center border border-light rounded-circle'>
              {/* <p style={{ fontSize: '1rem' }}> Profile </p> */}
              <img style={{ width: '2.5rem', height: '2.5rem', marginRight: '3px' }} className='icon-navbar' src={user} />
              <NavDropdown style={{ width: '4rem', height: '3.5rem', marginRight: '-50px', marginTop: '15px' }} >
                <NavDropdown.Item href='/user/profile'>  Profile  </NavDropdown.Item>
                <NavDropdown.Item onClick={Logouat}> Logouat </NavDropdown.Item>
              </NavDropdown>
            </div>
          }

          {/* {
            localStorage.getItem('Admin') &&
            <Nav.Link href='/login'
              className='text-light d-flex'>
              <img className='icon-navbar' src={user} />
              <p> Admin </p>
            </Nav.Link>
          } */}







        </Container>
      </Navbar>

    </Row>
  )
}

export default NavbarLogin