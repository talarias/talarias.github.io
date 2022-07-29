import React, { FC } from 'react'
import { MenuData } from './types'

import './menu.scss'

const Menu: FC<MenuData> = ({
  menuItems = [],
  menuFooterItems = []
}) => {
  return (
    <>
      <div className='nav-menu'>
        <div className="nav-menu-body">
          {menuItems}
        </div>
        <div className="nav-menu-footer">
          <>
            {menuFooterItems}
          </>
        </div>
      </div>
    </>
  )
}

export default Menu
