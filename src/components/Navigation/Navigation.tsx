import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { useGlobalState } from '../../globalState'

import BurgerMenuToggler from '../BurgerMenuToggler/Toggler'
import Menu from './Menu'

import './styles/navigation.scss'
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
  const [showNavigation, setShowNavigation] = useGlobalState('showNavigation')

  const toggleShow = () => setShowNavigation(!showNavigation)

  return (
    <>
      <Navbar className='navbar-container' >
        <Container>
          <Link to={'/'}>
            <Navbar.Brand href="/">
              <img src={logo} alt={'logo'}></img>
              <div>
                <p className='title'>{siteTitle}</p>
                <p className='subtitle'>{siteSubTitle}</p>
              </div>
            </Navbar.Brand>
          </Link>
          <BurgerMenuToggler toggleFunc={toggleShow} isState={showNavigation} start={false} />
        </Container>
      </Navbar>

      <Offcanvas show={showNavigation} onHide={toggleShow} {...options}>
        <Offcanvas.Header closeButton={true}>
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
