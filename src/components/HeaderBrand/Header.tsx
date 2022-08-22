import React, { FC, useState } from 'react'
import { HeaderBrandData } from './types'

import './brand.scss'

const HeaderBrand: FC<HeaderBrandData> = ({
  frontImg
}) => {
  const [active, setActive] = useState(false)

  const toggle = () => {
    setActive(!active)
  }

  return (
    <>
      <div className={'header-brand flipped-' + active} onClick={toggle}>
        <div className='card'>
          <img src={frontImg} alt={'header-brand'} className='img-front'></img>
          <img src={'/homeBg.jpeg'} alt={'header-brand'} className='img-back'></img>
        </div>
      </div>
    </>
  )
}

export default HeaderBrand
