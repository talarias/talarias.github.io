import React, { FC } from 'react'
import { FooterItemData } from './types'

import './styles/footerItem.scss'

const FooterItem: FC<FooterItemData> = ({
  title,
  subTitle = '',
  url = '#',
  logo = null,
  logoAlt = undefined
}) => {
  return (
    <>
      <div className='menu-footer-item' >
        <a href={url}>
          <img src={logo} alt={logoAlt}></img>
          <span className='nav-menu-footer-title'>{title}</span>
          <span>{subTitle}</span>
        </a>
      </div>
    </>
  )
}

export default FooterItem
