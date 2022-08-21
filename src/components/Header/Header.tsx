import React, { FC } from 'react'
import { HeaderData } from './types'

import './header.scss'

const Header: FC<HeaderData> = ({
  title = 'Title',
  subTitle = 'subTitle',
  variant = 'dark',
  backgroundImg
}) => {
  return (
    <>
        <div className={'header-box ' + variant} style={{ backgroundImage: backgroundImg }}>
            <div className='header-title'>
              <h1>{title}</h1>
              {subTitle ? <h2>{subTitle}</h2> : ''}
            </div>
        </div>
    </>
  )
}

export default Header
