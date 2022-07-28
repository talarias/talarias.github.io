import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BurgerMenuToggler from '../BurgerMenuToggler/Toggler'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './Menu'

const options = {
  name: 'Disable backdrop',
  scroll: false,
  backdrop: false,
}

function Navigation() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
          <BurgerMenuToggler start={show} toggleFunc={toggleShow} isState={show}>
          </BurgerMenuToggler>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={toggleShow} {...options} style={{top: 61}}>
        <Offcanvas.Body>
          <Menu></Menu>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Navigation