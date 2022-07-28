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
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#" style={{color: 'white', display: 'flex'}}>
            <img src={'https://avatars.githubusercontent.com/u/53948891?v=4'} alt={'logo'} style={{width: '40px', height: '40px', borderRadius: '100%'}} ></img>
            <div style={{display: 'inline-block'}}>
              <p className='nav-brand-title' style={{margin: '0px 7px'}} >Max Mustermann</p>
              <p className='nav-brand-subtitle' style={{fontSize: '15px', fontStyle: 'italic', color: '#56b5e9', margin: 0}} >githubname</p>
            </div>
          </Navbar.Brand>
          <BurgerMenuToggler start={show} toggleFunc={toggleShow} isState={show}>
          </BurgerMenuToggler>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={toggleShow} {...options} backdrop={true}>
        <Offcanvas.Header closeButton={false}>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Menu></Menu>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Navigation