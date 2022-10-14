import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../../globalState'

import { MenuItemData } from './types'

import './styles/menuItem.scss'

const MenuItem: FC<MenuItemData> = ({
  title = 'Title',
  url = '/',
  logo = false,
  logoAlt = ''
}) => {
  const [showNavigation, setShowNavigation] = useGlobalState('showNavigation')

  const toggleShow = () => setShowNavigation(!showNavigation)

  return (
    <>
      <div className='menu-item' onClick={toggleShow}>
        <Link to={url}>
              <span className='nav-menu-title'>{title}</span>
              {logo ? <img src={logo} alt={logoAlt}></img> : null}
        </Link>
        <div className='nav-underline'></div>
      </div>
    </>
  )
}

export default MenuItem
