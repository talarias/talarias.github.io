import React, { FC } from 'react'
import { MenuItemData } from './types'

import './styles/menuItem.scss'

const MenuItem: FC<MenuItemData> = ({
  title = 'Title',
  url = '/',
  logo = false,
  logoAlt = ''
}) => {
  return (
    <>
      <div className='menu-item' >
        <a href={url}>
          <span className='nav-menu-title'>{title}</span>
          {logo ? <img src={logo} alt={logoAlt}></img> : null}
        </a>
      </div>
    </>
  )
}

export default MenuItem
