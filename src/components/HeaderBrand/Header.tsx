import React, { FC } from 'react'
import { HeaderBrandData } from './types'

import './brand.scss'

const HeaderBrand: FC<HeaderBrandData> = ({
  frontImg
}) => {
  return (
    <>
      <div className='header-brand'>
        <img src={frontImg} alt={'header-brand'}></img>
      </div>
    </>
  )
}

export default HeaderBrand
