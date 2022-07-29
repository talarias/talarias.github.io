import React, { FC, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import BurgerMenuToggler from '../BurgerMenuToggler/Toggler'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Menu from './Menu'

import './navigation.scss'
import { NavigationData } from './types'

const options = {
  name: 'Disable backdrop',
  scroll: false,
  backdrop: true
}

const Navigation: FC<NavigationData> = ({
  menuItems = [],
  menuFooterItems = [],
  logo = 'https://avatars.githubusercontent.com/u/53948831?v=3',
  siteTitle = 'Max Mustermann',
  siteSubTitle = 'githubname'

}) => {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow(!show)

  return (
    <>
      <Navbar bg="dark" className='navbar-container' >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt={'logo'}></img>
            <div>
              <p className='title'>{siteTitle}</p>
              <p className='subtitle'>{siteSubTitle}</p>
            </div>
          </Navbar.Brand>
          <BurgerMenuToggler toggleFunc={toggleShow} isState={show} start={false} />
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={toggleShow} {...options}>
        <Offcanvas.Header closeButton={false}>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Menu
            menuItems={menuItems}
            menuFooterItems={menuFooterItems}
          ></Menu>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Navigation
